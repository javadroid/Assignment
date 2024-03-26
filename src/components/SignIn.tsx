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
        <div className="image basis-1/2 h-screen"></div>
        {/* The Signup page */}
        <div className="basis-1/2 flex flex-col pt-16 px-16 pb-12">
          <div className="flex flex-row justify-end mb-10">
            <p className="font-medium">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-[#a1812e] font-medium">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-700 text-4xl pb-4">Sign In</h1>
            <p className="text-gray-500 text-base mb-8">
              Fill in your details to sign in
            </p>
            <form action="">
              <div>
                <div className="mb-8">
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

                <div className="mb-8">
                  <Button label="Sign In" type="group" arrow={true} />
                </div>

                <div className="">
                  <p className="text-base font-light">
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
