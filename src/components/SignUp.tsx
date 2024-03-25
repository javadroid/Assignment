import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import "../index.css";

const SignUp: React.FC = () => {
  const [showPassword, setPasswordVisble] = useState(false);
  const passwordChange = () => {
    setPasswordVisble(!showPassword);
  };
  return (
    <div className="my-20 mx-[20rem] font-pop">
      <div className="flex justify-between">
        <div className="block">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="font-semibold text-black text-3xl mb-3"
          >
            Sign Up
          </h1>
          <p className="font-medium text-[0.9rem]">
            Fill in your details to sign up
          </p>
        </div>
        <div className="flex">
          <p className="font-pop font-medium text-[1rem]">
            Already have an account?
          </p>
          <Link
            className="px-2 font-pop text-[#a1812e] font-[500] text-[1rem]"
            to="/SignIn"
          >
            Sign In!
          </Link>
        </div>
      </div>
      <form action="" className="flex justify-between mt-8">
        <div className="flex flex-col">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            className="border-black border-2 w-[17rem] my-4 h-[2.5rem] px-1 rounded-[0.7rem]"
          />
          <label htmlFor="userID">User ID:</label>
          <input
            type="text"
            id="userID"
            className="border-black border-2 w-[17rem] my-4 h-[2.5rem] px-1 rounded-[0.7rem]"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="border-black border-2 w-[17rem] my-4 h-[2.5rem] px-1 rounded-[0.7rem]"
          />
          <label htmlFor="dropDownDept">Department:</label>
          <DropDown />

          <label htmlFor="dropdownType">Type:</label>
          <DropDown />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              className="border-black w-[17rem] my-4 h-[2.5rem] px-1 border-2 rounded-[0.7rem]"
            />
            <div className="absolute right-2">
              {showPassword ? (
                <FaEyeSlash onClick={passwordChange} />
              ) : (
                <FaEye onClick={passwordChange} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            className="w-[17rem] my-4 h-[2.5rem] px-1 rounded-[0.7rem]"
          />
        </div>
      </form>
    </div>
  );
};
export default SignUp;
