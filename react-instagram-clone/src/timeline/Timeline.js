import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const user = useSelector((state) => state.data.user.user);
  const [posts, setPosts] = useState([
    {
      user: "bmandann",
      postImage:
        "https://images.ctfassets.net/r1kltcpyyy0d/4nEcjFopxnDPk1aufU54Ev/d98a9d1e6f669d9871459d38c22e2ccb/LD23_r0001_064.jpg",
      likes: 54,
      timestamp: "2d",
      rating: 5,
    },
    {
      user: "longAssignmentEnjoyer",
      postImage:
        "https://www.motortrend.com/uploads/sites/5/2019/11/2020-Audi-R8-54.jpg",
      likes: 432,
      timestamp: "3d",
      rating: 4,
    },
    {
      user: "ImSoTired",
      postImage:
        "https://hips.hearstapps.com/hmg-prod/images/red-bull-racings-dutch-driver-max-verstappen-steers-his-car-news-photo-1659046839.jpg",
      likes: 140,
      timestamp: "18h",
      rating: 3,
    },
    {
      user: "BigSwimma",
      postImage: "https://i.redd.it/yrlehepf75aa1.jpg",
      likes: 760,
      timestamp: "10yr",
      rating: 5,
    },
  ]);

  const [newPost, setNewPost] = useState({
    text: "",
    postImage: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && (newPost.text || newPost.postImage)) {
      setPosts((prevPosts) => [
        ...prevPosts,
        {
          user: user.username,
          ...newPost,
          likes: 0,
          timestamp: "Just now",
          rating: newPost.rating || "N/A",
        },
      ]);
      setNewPost({
        text: "",
        postImage: "",
        rating: 0,
      });
    }
  };

  return (
    <div className="timeline">
      <div className="timeline__left">
        <form onSubmit={handleSubmit} className="timeline__form">
          <textarea
            name="text"
            value={newPost.text}
            onChange={handleChange}
            placeholder="What's on your mind?"
            className="timeline__textarea"
          />
          <input
            type="text"
            name="postImage"
            value={newPost.postImage}
            onChange={handleChange}
            placeholder="Image URL (optional)"
            className="timeline__input"
          />
          <div className="timeline__rating-container">
            <label className="timeline__rating-label">
              Rating: {newPost.rating} / 5
            </label>
            <input
              type="range"
              name="rating"
              value={newPost.rating}
              onChange={handleChange}
              min="0"
              max="5"
              className="timeline__rating"
            />
          </div>
          <button type="submit" className="timeline__button">
            Post
          </button>
        </form>
        <div className="timeline__posts">
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
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
