import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="flex flex-col border border-gray-700 p-12 m-8 bg-gray-800 rounded-lg shadow-lg">
      <img
        src="https://www.bates.edu/communications-marketing/files/2017/05/bates-wordmark-201.png"
        alt=""
        className="w-48 mx-auto mb-10 shadow-sm"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="bg-gray-700 border border-gray-700 rounded-lg p-4 mb-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-600"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="bg-gray-700 border border-gray-700 rounded-lg p-4 mb-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-gray-600"
      />
      <button
        onClick={handleLogin}
        className="p-4 rounded-lg bg-maroon-700 text-white font-bold text-lg transition duration-300 ease-in-out hover:bg-maroon-600"
      >
        Log in
      </button>
    </div>
  );
}

export default Login;
