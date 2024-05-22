import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidenav.css";
import HistoryIcon from "@mui/icons-material/History";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const handlePostHistoryClick = () => {
    navigate("/post-history");
  };

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.bates.edu/communications-marketing/files/2017/05/bates-wordmark-black.png"
        alt="Bates Logo"
        style={{ marginBottom: "50px"}}
      />
      <div className="sidenav__buttons">
      <button className="sidenav__buttons" onClick={handlePostHistoryClick}>
         <div style={{ display: "flex", alignItems: "center" }}>
        <HistoryIcon />
         <span style={{ marginLeft: "5px"}}>Post History</span>
          </div>
    </button>

        <button className="sidenav__buttons" style={{ marginTop: "450px"}}>
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}  
          </Avatar>
          <span>
            {user.username}{"   "}
            <button onClick={handleLogout} className="logout__button">
              Logout
            </button>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
