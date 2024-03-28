import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";

const ForgetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="component">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/2 h-screen"></div>
        <div className="basis-1/2 flex flex-col pt-16 px-16 pb-12">
          <div className="flex flex-row justify-end mb-16">
            <p className="font-medium">
              Don't have an account?{" "}
              <Link to={"/SignUp"} className="text-[#a1812e] font-medium">
                Sign Up
              </Link>
            </p>
          </div>
          <div>
            <h1 className="font-bold text-gray-700 text-4xl pb-4">
              Reset Password
            </h1>
            <p className="text-gray-500 text-base mb-10 w-2/3">
              Input your email address to retrieve your password
            </p>
            <form action="">
              <div>
                <div className="mb-10">
                  <InputField labelText="Email" id="email" type="email" />
                </div>

                <div className="mb-10">
                  <Button label="Proceed" type="button" arrow={false} />
                </div>

                <div className="">
                  <p className="text-base font-light">
                    Remember your password?{" "}
                    <Link to={"/"} className="text-[#a1812e]">
                      Sign In!
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
};

export default ForgetPassword;
