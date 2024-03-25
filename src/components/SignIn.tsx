/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

function SignIn() {
  const [showPassword, setPasswordVisible] = useState(false);
  const passwordChange = () => {
    setPasswordVisible(!showPassword);
  };

  return (
    <div className="w-full font-pop">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/3"></div>
        <div className="basis-2/3 flex flex-col pt-28 px-24 pb-96">
          <div className="flex flex-row justify-between mb-28 items-center">
            <Link to={"/"} className="text-[#a1812e]">
              <FaArrowLeft />
            </Link>
            <p className="font-medium">
              Don't have an account?{" "}
              <Link to={"/"} className="text-[#a1812e] font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
          <div>
            <h1 className="font-bold text-gray-700 text-6xl pb-4">Sign In</h1>
            <p className="text-gray-500 text-base mb-16">
              Fill in your details to sign in
            </p>
            <form action="">
              <div>
                <div className="mb-10">
                  <label
                    htmlFor="userId"
                    className="block text-lg font-medium leading-6 text-gray-500"
                  >
                    User ID:
                  </label>
                  <div className="">
                    <input
                      type="text"
                      className="w-72 my-4 h-10 px-2 rounded-xl pr-10 border-2 border-gray-500 outline-none focus:border-[#a1812e]"
                    />
                  </div>
                </div>
                <div className="mb-16">
                  <label
                    htmlFor="password"
                    className="block text-lg font-medium leading-6 text-gray-500"
                  >
                    Password:
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-72 my-4 h-10 px-2 rounded-xl pr-10 border-2 border-gray-500 outline-none focus:border-[#a1812e]"
                    />
                    <div className="absolute inset-y-0 right-[26rem] flex items-center pr-4 focus:right-96">
                      {showPassword ? (
                        <FaEyeSlash
                          onClick={passwordChange}
                          className="text-gray-500"
                        />
                      ) : (
                        <FaEye
                          onClick={passwordChange}
                          className="text-gray-500"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <button className="w-72 flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]">
                    <span className="text-base text-white">Sign In</span>
                    <GoArrowRight className="ml-2 text-xl text-white" />
                    {/* <FaArrowRightLong /> */}
                  </button>
                </div>

                <div className="">
                  <p className="font-medium">
                    Forget your password?{" "}
                    <Link
                      to={"/forget"}
                      className="text-[#a1812e] font-semibold"
                    >
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
