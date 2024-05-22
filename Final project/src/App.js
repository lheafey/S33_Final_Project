import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./Homepage";
import Authenticate from "./authenticate/Authenticate";
import PostHistory from "./PostHistory";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, [dispatch]);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <Router>
      <div className="app">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<Homepage />} />
                <Route path="/post-history" element={<PostHistory />} />
              </>
            ) : (
              <Route path="/" element={<Authenticate />} />
            )}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
