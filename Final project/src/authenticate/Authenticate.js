import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex-1 max-w-[33%] min-w-[300px] mx-12 bg-white p-5 shadow-lg">
        {active === "login" ? <Login /> : <Signup />}
        <div className="border border-gray-400 p-2 mt-5 text-center rounded shadow-sm cursor-pointer bg-white hover:bg-gray-200 transition">
          <span className="font-medium text-sm">
            {active === "login" ? (
              <>
                <button
                  onClick={handleChange}
                  className="bg-transparent border-0 font-bold text-black hover:text-red-700"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleChange}
                  className="bg-transparent border-0 font-bold text-black hover:text-red-700"
                >
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
