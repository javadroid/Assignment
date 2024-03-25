import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import "../index.css";
import { GoArrowRight } from "react-icons/go";
import InputField from "./InputField";
import ShowPassword from "./ShowPassword";

const SignUp: React.FC = () => {
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
            to="/"
          >
            Sign In!
          </Link>
        </div>
      </div>
      <form action="" className="flex flex-col mt-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <InputField labelText="First Name:" id="fname" type="text" />
            <InputField labelText="User ID:" id="userId" type="text" />
            <InputField labelText="Email:" id="email" type="email" />
            <label htmlFor="dropDownDept">Department:</label>
            <DropDown />
            <label htmlFor="dropdownType">Type:</label>
            <DropDown />
          </div>
          <div className="flex flex-col">
            <InputField labelText="Last Name:" id="lname" type="text" />
            <InputField labelText="Phone No:" id="tel" type="tel" />
            <label htmlFor="Faculty">Faculty:</label>
            <DropDown />
            <ShowPassword labelText="Confirm Password:" id="confirmPassword" />
            <ShowPassword labelText="Password:" id="password" />
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
