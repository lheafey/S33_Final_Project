import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Popular Forums</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Best Classes @ Bates</span>
              <span className="relation">Last Updated 23 min ago</span>
            </div>
          </div>
          <button className="follow__button">Enter Forum</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Marketplace</span>
              <span className="relation">Last Updated 4 hrs ago</span>
            </div>
          </div>
          <button className="follow__button">Enter Forum</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Rideshares</span>
              <span className="relation">Last Updated 1 wk ago</span>
            </div>
          </div>
          <button className="follow__button">Enter Forum</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Tech Support</span>
              <span className="relation">Last Updated 6 days ago</span>
            </div>
          </div>
          <button className="follow__button">Enter Forum</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Rideshares</span>
              <span className="relation">Last Updated 1 wk ago</span>
            </div>
          </div>
          <button className="follow__button">Enter Forum</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Tutoring</span>
              <span className="relation">Last Updated 2 days ago</span>
            </div>
          </div>
          <button className="follow__button">Enter Forum</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;