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
    <div className="font-pop h-screen w-screen text-base border-gray-500">
      {/* Container */}
      <div className="flex flex-row text-gray-900">
        {/* Side Image */}
        <div className="image basis-1/2 h-screen"></div>
        {/* The Signup page */}
        <div className="basis-1/2 w-full flex flex-col px-20 py-16">
          <div className="flex justify-end">
            <p className="">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-[#a1812e]">
                Sign Up!
              </Link>
            </p>
          </div>
          <div className="pt-20 flex flex-col">
            <h1 className="pb-2 font-bold text-gray-700 text-4xl">Sign In</h1>
            <caption className="flex">Fill in your details to sign in</caption>
            <form action="">
              <div className="pt-5">
                <div className="mb-10">
                  <InputField
                    labelText="UserId:"
                    id="userId"
                    type="text"
                    divClassName="my-4"
                    className="desktopInputField"
                  />
                  <ShowPassword
                    labelText="Password:"
                    id="password"
                    className="desktopInputField"
                  />
                </div>

                <div className="mb-6">
                  <Button
                    label="Sign In"
                    className="group w-full flex flex-row justify-center items-center px-8 py-2.5 rounded-xl bg-[#a1812e]"
                    arrow={true}
                  />
                </div>

                <div className="pt-4">
                  <p className="">
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
