import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";

const ForgetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="font-pop h-screen w-screen text-base border-gray-500">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/2 h-screen"></div>
        <div className="basis-1/2 w-full flex flex-col px-20 py-16">
          <div className="flex justify-end">
            <p className="">
              Don't have an account?{" "}
              <Link to={"/SignUp"} className="text-[#a1812e]">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="pt-20 flex flex-col">
            <h1 className="pb-2 font-bold text-gray-700 text-4xl">
              Reset Password
            </h1>
            <p className="text-sm mb-10 w-2/3">
              Input your email address to retrieve your password
            </p>
            <form action="">
              <div>
                <div className="mb-10">
                  <InputField
                    labelText="Email:"
                    id="email"
                    type="email"
                    divClassName="block font-medium leading-6"
                    className="w-full my-1 p-2 rounded-xl pr-8 border-2 border-gray-500 outline-none focus:border-[#a1812e]"
                  />
                </div>

                <div className="mb-10">
                  <Button
                    label="Proceed"
                    className="button w-full flex flex-row justify-center items-center px-8 py-2.5 rounded-xl bg-[#a1812e]"
                    arrow={false}
                  />
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
