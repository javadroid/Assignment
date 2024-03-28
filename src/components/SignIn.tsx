/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";
import ShowPassword from "./ShowPassword";

function SignIn() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="component">
      {/* Container */}
      <div className="flex flex-row text-gray-900">
        {/* Side Image */}
        <div className="image basis-1/2 h-screen"></div>
        {/* The Signup page */}
        <div className="basis-1/2 w-full flex flex-col px-10 py-16">
          <div className="flex justify-end">
            <caption className="text-gray-500 flex">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-[#a1812e]">
                Sign Up
              </Link>
            </caption>
          </div>
          <div className="pt-20 flex flex-col">
            <h1 className="pb-2 font-bold text-gray-700 text-4xl">Sign In</h1>
            <caption className="text-gray-500 flex">
              Fill in your details to sign in
            </caption>
            <form action="">
              <div className="pt-5">
                <div className="mb-10">
                  <InputField
                    labelText="UserId:"
                    id="userId"
                    type="text"
                    divClassName=""
                    className=""
                  />
                  <ShowPassword
                    labelText="Password:"
                    id="password"
                    className=""
                  />
                </div>

                <div className="mb-6">
                  <Button label="Sign In" type="group" arrow={true} />
                </div>

                <div className="pt-4">
                  <caption className=" text-gray-500 flex">
                    Forget your password?{" "}
                    <Link to={"/forget"} className="text-[#a1812e]">
                      Reset Now!
                    </Link>
                  </caption>
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
