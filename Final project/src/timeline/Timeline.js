import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import { db, storage } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button, Rating, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";



function Timeline() {
  const user = useSelector((state) => state.data.user.user);
  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState({
    text: "",
    postImage: "",
    rating: 0,
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => doc.data());
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleRatingChange = (newValue) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      rating: newValue,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user && (newPost.text || newPost.postImage || imageFile)) {
      let postImageUrl = newPost.postImage;

      if (imageFile) {
        const imageRef = ref(storage, `images/${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        postImageUrl = await getDownloadURL(imageRef);
      }

      const newPostData = {
        user: user.username,
        text: newPost.text,
        postImage: postImageUrl,
        likes: 0,
        timestamp: new Date().toISOString(),
        rating: newPost.rating || "N/A",
      };

      await addDoc(collection(db, "posts"), newPostData);
      setPosts((prevPosts) => [...prevPosts, newPostData]);

      setNewPost({
        text: "",
        postImage: "",
        rating: 0,
      });

      setImageFile(null);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 min-h-screen">
      <div className="flex-1 p-10">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mb-8">
          <textarea
            name="text"
            value={newPost.text}
            onChange={handleChange}
            placeholder="What's on your mind?"
            className="w-full p-2 mb-3 border border-gray-300 rounded-lg text-black"
          />
          <input
            type="text"
            name="postImage"
            value={newPost.postImage}
            onChange={handleChange}
            placeholder="Image URL (optional)"
            className="w-full p-2 mb-3 border border-gray-300 rounded-lg text-black"
          />
          <input
            type="file"
            name="imageFile"
            onChange={handleImageChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded-lg text-black"
          />
          <div className="flex items-center mb-3">
            <label className="mr-3">Rating: {newPost.rating} / 5</label>
            <Rating
              name="rating"
              value={newPost.rating}
              onChange={(newValue) => handleRatingChange(newValue)}
              className="w-full"
            />
          </div>
          <Button onClick={handleOpen} variant="gradient" type="submit" className="w-full py-2 mt-4 bg-red-800 text-white rounded-lg hover:bg-red-700">
            Post
          </Button>
          <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Do you want to post this?</DialogHeader>
        <DialogBody>
          Sometimes it can be good to double-check with yourself before putting something out there on the internet. 
          Please be careful when posting material on our site. We are not responsible for the material posted on this 
          site, nor do we condone said material. 
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
        </form>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              text={post.text}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              rating={post.rating}
            />
          ))}
        </div>
      </div>
      <div className="flex-1/3 p-10 bg-red-800 text-black rounded-lg shadow-md">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
