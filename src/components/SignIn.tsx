/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Password from "./Password";
import Button from "./Button";

function SignIn() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="w-screen font-pop h-screen">
      {/* Container */}
      <div className="flex flex-row text-gray-900">
        {/* Side Image */}
        <div className="image basis-1/3 h-screen sm:basis-1/2"></div>
        {/* The Signup page */}
        <div className="basis-2/3 flex flex-col pt-12 px-4 pb-12 sm:basis-1/2 sm:px-8 lg:px-10 xl:px-14 xl:pt-20">
          <div className="flex flex-row justify-end mb-10 ">
            <p className="text-xs text-gray-600 sm:font-semibold lg:text-base xl:text-2xl">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-[#a1812e]">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="flex flex-col lg:pt-8 xl:pt-16">
            <h1 className="font-bold text-gray-700 text-3xl pb-2 lg:text-5xl lg:pb-4 xl:text-6xl xl:pb-6">
              Sign In
            </h1>
            <p className="text-gray-500 text-xs mb-4 lg:text-base xl:text-xl">
              Fill in your details to sign in
            </p>
            <form action="">
              <div className="pt-5 xl:pt-10">
                <div className="mb-10 lg:mb-14">
                  <Input
                    label="User ID:"
                    id="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    ref={userIdRef}
                  />
                  <Password
                    label="Password:"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordRef}
                  />
                </div>

                <div className="mb-6 xl:mb-10">
                  <Button label="Sign In" type="group" arrow={true} />
                </div>

                <div className="pt-4">
                  <p className="text-xs text-gray-600 sm:font-semibold lg:text-base xl:text-2xl">
                    Forget your password?{" "}
                    <Link to={"/forget"} className="text-[#a1812e]">
                      Reset Now!
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
