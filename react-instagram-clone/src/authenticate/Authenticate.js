import React, { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="flew flex-row items-center my-0 mx-12.5">
      <div className="basis-2/4 text-center">
        <img
          className="w-100 mt-10"
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
        />
      </div>
      <div className="basis-2/4">
        {active === "login" ? <Login /> : <Signup />}

        <div className="border border-slate-500 p-5 mx-7.5 mt-3.25 text-center">
          <span
            className="font-medium text-sm ">
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button 
                className="bg-0 border-0 font-bold text-sky-400 hover:cursor-pointer"
                onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button className="bg-0 border-0 font-bold text-sky-400 hover:cursor-pointer" 
                onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
