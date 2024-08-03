import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./Reusable-Code/DropDown";
import "../index.css";
import { GoArrowRight } from "react-icons/go";
import InputField from "./Reusable-Code/InputField";
import ShowPassword from "./Reusable-Code/ShowPassword";
import FacultyDropDown from "./Reusable-Code/FacultyDropDown";
import TypeDropDown from "./Reusable-Code/TypeDropDown";

const SignUp: React.FC = () => {
  return (
    <div className="overflow-auto lg:overflow-auto font-pop h-screen text-gray-500">
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
              <FacultyDropDown
                divClassName="flex flex-col"
                labelText="Faculty:"
                id="dropDown"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            <div className="flex justify-between">
              <DropDown
                divClassName="flex flex-col"
                labelText="Department:"
                id="dropDown"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <TypeDropDown
                divClassName="flex flex-col"
                labelText="Type:"
                id="dropDown"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              {/* <DropDown
                divClassName="flex flex-col"
                labelText="Role:"
                id="dropDown"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              /> */}
            </div>

            <div className="flex justify-between">
              <ShowPassword
                labelText="Password:"
                id="confirmPassword"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              {/* <ShowPassword
                labelText="Confirm Password:"
                id="password"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              /> */}
            </div>
            {/* submit btn */}
            <div className="my-10">
              <p className="lg:text-sm text-wrap w-full mt-2">
                By clicking continue, I agree to{" "}
                <Link className="text-[#a1812e]" to="/">
                  Terms of Use
                </Link>{" "}
                and acknoledge that I have read the{" "}
                <Link className="text-[#a1812e]" to="/">
                  Privacy Policy
                </Link>
              </p>
              <div className="mt-3 flex justify-center">
                <button
                  type="submit"
                  className="group lg:mt-2 w-[50rem] h-[3rem] flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]"
                >
                  <span className="text-base text-white">Sign Up</span>
                  <GoArrowRight className="ml-2 text-xl text-white opacity-70 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
