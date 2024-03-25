import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="w-full font-pop">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/3"></div>
        <div className="basis-2/3 flex flex-col pt-28 px-24 pb-96">
          <div className="flex flex-row justify-between mb-28 items-center">
            <Link to={"/signIn"} className="text-[#a1812e]">
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
            <h1 className="font-bold text-gray-700 text-6xl pb-4">
              Reset Password
            </h1>
            <p className="text-gray-500 text-base mb-16">
              Input your email address to retrieve your password
            </p>
            <form action="">
              <div>
                <div className="mb-10">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium leading-6 text-gray-500"
                  >
                    Email Address:
                  </label>
                  <div className="">
                    <input
                      type="email"
                      className="w-72 my-4 h-10 px-2 rounded-xl pr-10 border-2 border-gray-500 outline-none focus:w-80 focus:border-[#a1812e]"
                    />
                  </div>
                </div>

                <div className="mb-16">
                  <button className="button w-72 flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]">
                    <span className="text-base text-white">Proceed</span>
                  </button>
                </div>

                <div className="">
                  <p className="font-medium">
                    Remember your password?{" "}
                    <Link
                      to={"/signIn"}
                      className="font-semibold text-[#a1812e]"
                    >
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
