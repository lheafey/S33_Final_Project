import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Import storage from firebase configuration
import "./PostHistory.css";

function PostHistory() {
  const [imageUrls, setImageUrls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, 'images/');
      const imagesList = await listAll(imagesRef);
      const urls = await Promise.all(imagesList.items.map(item => getDownloadURL(item)));
      setImageUrls(urls);
    };
    fetchImages();
  }, []);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="postHistory">
      <button onClick={handleBackClick} className="backButton">Back to Homepage</button>
      <h2>Post History</h2>
      <div className="postHistory__grid">
        {imageUrls.map((url, index) => (
          <div key={index} className="postHistory__item">
            <img src={url} alt={`Post ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostHistory;
