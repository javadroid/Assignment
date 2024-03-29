import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Reusable-Code/Button";
import InputField from "./Reusable-Code/InputField";

const ForgetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="component">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/2 h-screen"></div>
        <div className="basis-1/2 w-full flex flex-col px-40 py-16">
          <div className="flex justify-end">
            <caption className="text-sm">
              Don't have an account?{" "}
              <Link to={"/SignUp"} className="text-[#a1812e]">
                Sign Up
              </Link>
            </caption>
          </div>
          <div className="pt-20 flex flex-col">
            <h1 className="pb-2 font-bold text-gray-700 text-4xl">
              Reset Password
            </h1>
            <p className="text-sm mb-10 w-full">
              Input your email address to retrieve your password
            </p>
            <form action="">
              <div>
                <div className="mb-10">
                  <InputField
                    labelText="Email:"
                    id="email"
                    type="email"
                    divClassName=""
                    className="inputField"
                  />
                </div>

                <div className="mb-10">
                  <Button
                    label="Proceed"
                    className="button btn"
                    arrow={false}
                  />
                </div>

                <div className="flex">
                  <caption className="">
                    Remember your password?{" "}
                    <Link to={"/"} className="text-[#a1812e]">
                      Sign In!
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
};

export default ForgetPassword;
