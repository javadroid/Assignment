import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./Reusable-Code/DropDown";
import "../index.css";
import { GoArrowRight } from "react-icons/go";
import InputField from "./Reusable-Code/InputField";
import ShowPassword from "./Reusable-Code/ShowPassword";

const SignUp: React.FC = () => {
  return (
    <div className="overflow-auto lg:overflow-hidden font-pop h-screen text-gray-500">
      {/* Sign up header */}
      <div className="flex justify-between xs:mx-[1.5rem] lg:mx-[15rem] my-3">
        <div className="">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="xs:text-[2rem] md:text-[3rem] font-semibold text-black text-5xl mb-3"
          >
            Sign Up
          </h1>
          <caption className="flex flex-row font-medium text-[0.8rem]">
            Fill in your details to sign up
          </caption>
        </div>
        <div className="flex mr-5">
          <p className="font-pop font-medium mt-1 text-[0.8rem] md:text-[1rem]">
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

      {/* container */}
      <div className="xs:mx-[1.5rem] lg:mx-[15rem] my-4">
        <form className="">
          <div className="xs:text-[1rem] md:text-[1.2rem] gap-y-2">
            <div className="flex justify-between">
              <InputField
                labelText="First Name:"
                id="fname"
                type="text"
                divClassName="flex flex-col"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <InputField
                labelText="Last Name:"
                id="lname"
                type="text"
                divClassName="flex flex-col"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            <div className="flex justify-between">
              <InputField
                labelText="Middle Name:"
                id="mname"
                type="text"
                divClassName="flex flex-col"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <InputField
                labelText="Phone No:"
                id="phoneNo"
                type="tel"
                divClassName="flex flex-col"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            <div className="flex justify-between">
              <InputField
                labelText="Email:"
                id="email"
                type="email"
                divClassName="flex flex-col"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <DropDown
                label="Faculty:"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
