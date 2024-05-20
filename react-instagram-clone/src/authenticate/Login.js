import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "../style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="flex flex-col border-1 border-gray-500 p-12 mx-30">
      <img
        className="w-52 mx-auto mb-10  "
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        className="bg-white border-1 border-gray-500 rounded p-3 mb-2.5 text-white focus:outline outline-slate-500"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        className="bg-white border-1 border-gray-500 rounded p-3 mb-2.5 text-white focus:outline outline-slate-500"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button 
      className="p-3 rounded-lg border-0 font-bold text-white bg-sky-500 hover:cursor-pointer"
      onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
