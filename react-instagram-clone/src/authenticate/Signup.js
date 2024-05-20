import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="flex flex-col border border-slate-500 p-12 mx-7.5">
      <img
      className="w-50 mx-auto mb-10"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        className="bg-white border-1 border-gray-500 rounded p-3 mb-2.5 text-white focus:outline outline-slate-500"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        className="bg-white border-1 border-gray-500 rounded p-3 mb-2.5 text-white focus:outline outline-slate-500"
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username}
      />
      <input
        className="bg-white border-1 border-gray-500 rounded p-3 mb-2.5 text-white focus:outline outline-slate-500"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button
      className="p-3 rounded-lg border-0 font-bold text-white bg-sky-500 hover:cursor-pointer"
      onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;
