import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Reusable-Code/Button";
import ShowPassword from "../Reusable-Code/ShowPassword";

const NewPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="component">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/2 h-screen"></div>
        <div className="basis-1/2 w-full flex flex-col px-20 py-16">
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
              Enter New Password
            </h1>
            <p className="text-gray-500 text-base mb-10 w-2/3">
              Enter a new password to continue
            </p>
            <form action="">
              <div>
                <div className="mb-10">
                  <ShowPassword
                    labelText="New Password:"
                    id="password"
                    className="w-full my-1 px-3 py-1 rounded-xl pr-8 border-2 border-gray-500 outline-none focus:border-[#a1812e]"
                  />
                  <ShowPassword
                    labelText="Confirm Password:"
                    id="confirmPassword"
                    className="w-full my-1 px-3 py-1 rounded-xl pr-8 border-2 border-gray-500 outline-none focus:border-[#a1812e]"
                  />
                </div>
                <div>
                  <Button
                    label="Proceed"
                    className="button w-full flex flex-row justify-center items-center px-8 py-2.5 rounded-xl bg-[#a1812e]"
                    arrow={false}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
