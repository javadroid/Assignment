import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import "../index.css";
import { GoArrowRight } from "react-icons/go";

const SignUp: React.FC = () => {
  const [showPassword, setPasswordVisible] = useState(false);
  const passwordChange = () => {
    setPasswordVisible(!showPassword);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-20 mx-[18rem] font-pop">
      <div className="flex justify-between">
        <div className="block">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="font-semibold text-black text-5xl mb-3"
          >
            Sign Up
          </h1>
          <p className="font-medium text-[1rem]">
            Fill in your details to sign up
          </p>
        </div>
        <div className="flex">
          <p className="font-pop font-medium text-[1rem]">
            Already have an account?
          </p>
          <Link
            className="px-2 font-pop text-[#a1812e] font-[600] text-[1rem]"
            to="/SignIn"
          >
            Sign In!
          </Link>
        </div>
      </div>
      <form action="" className="flex flex-col mt-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              className="borderBlack border-2 w-[17rem] my-4 h-[2.5rem] px-1 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
            />
            <label htmlFor="userID">User ID:</label>
            <input
              type="text"
              id="userID"
              className="borderBlack border-2 w-[17rem] my-4 h-[2.5rem] px-1 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="borderBlack border-2 w-[17rem] my-4 h-[2.5rem] px-1 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
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
                className="borderBlack w-[17rem] my-4 h-[2.5rem] px-1 border-2 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
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
              className="borderBlack w-[17rem] my-4 h-[2.5rem] px-1 border-2 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
            />
            <label htmlFor="PhoneNo">Phone No:</label>
            <input
              type="tel"
              id="phoneNo"
              className="borderBlack w-[17rem] my-4 h-[2.5rem] px-1 border-2 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
            />
            <label htmlFor="Faculty">Faculty:</label>
            <DropDown />
            <label htmlFor="Role">Role:</label>
            <DropDown />
            <label htmlFor="password">Password</label>
            <div className="flex items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                className="borderBlack w-[17rem] my-4 h-[2.5rem] px-1 border-2 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
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
        </div>
        <div>
          <p className=" text-wrap w-full mt-10">
            By clicking continue, I agree to{" "}
            <Link className="text-[#a1812e]" to="/">
              Terms of Use
            </Link>{" "}
            and acknoledge that I have read the{" "}
            <Link className="text-[#a1812e]" to="/">
              Privacy Policy
            </Link>
          </p>
          <div className=" mt-16 flex justify-center">
            <button className="group w-[50rem] h-[3rem] flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]">
              <span className="text-base text-white">Sign In</span>
              <GoArrowRight className="ml-2 text-xl text-white opacity-70 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
