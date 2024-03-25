import React from "react";
import "./style.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/3"></div>
        <div className="basis-2/3 flex flex-col pt-28 px-24 pb-96">
          <div className="flex flex-row justify-between mb-28 items-center">
            <Link to={"/signIn"} className="color">
              <FaArrowLeft />
            </Link>
            <p className="font-medium">
              Don't have an account?{" "}
              <Link to={"/"} className="color font-semibold">
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
                      className="w-72 my-4 h-10 px-2 rounded-xl pr-10 focus:w-80 focus"
                    />
                  </div>
                </div>

                <div className="mb-16">
                  <button className="button w-72 flex flex-row justify-center items-center px-16 py-2 rounded-xl">
                    <span className="text-base">Sign In</span>
                  </button>
                </div>

                <div className="">
                  <p className="font-medium">
                    Forget your password?{" "}
                    <Link to={"/forget"} className="color font-semibold">
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
};

export default ForgetPassword;
