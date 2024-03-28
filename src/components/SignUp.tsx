import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import "../index.css";
import { GoArrowRight } from "react-icons/go";
import InputField from "./InputField";
import ShowPassword from "./ShowPassword";

const SignUp: React.FC = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div
      className="font-pop md:my-2 md:mx-[3rem] md:text-[0.8rem] sm:h-screen
       lg:my-[4rem]  lg:mx-[10rem] lg:text-[1rem]  
    xl:mx-[21rem] 2xl:mx-[55rem] 2xl:my-[10rem] overflow-hidden"
    >
      <div className="flex justify-between md:mx-[3rem] md:mb-0">
        <div className="">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="md:text-[2rem] font-semibold text-black text-5xl mb-3"
          >
            Sign Up
          </h1>
          <caption className="flex flex-row font-medium text-[0.8rem]">
            Fill in your details to sign up
          </caption>
        </div>
        <div className="flex">
          <p className="font-pop font-medium text-[0.6rem] md:text-[1rem] ">
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
      <form action="" className="flex flex-col mt-3 md:mx-[3rem] md:mt-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <InputField
              labelText="First Name:"
              id="fname"
              type="text"
              className="borderBlack border-2 w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
         outline-none  focus:border-[#a1812e]"
            />
            <InputField
              labelText="User ID:"
              id="userId"
              type="text"
              className="borderBlack border-2 w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
         outline-none  focus:border-[#a1812e]"
            />
            <InputField
              labelText="Email:"
              id="email"
              type="email"
              className="borderBlack border-2 w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
         outline-none  focus:border-[#a1812e]"
            />
            <label htmlFor="dropDownDept">Department:</label>
            <DropDown />
            <label htmlFor="dropdownType">Type:</label>
            <DropDown />
          </div>
          <div className="flex flex-col">
            <InputField
              labelText="Last Name:"
              id="lname"
              type="text"
              className="borderBlack border-2 w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
         outline-none  focus:border-[#a1812e]"
            />
            <InputField
              labelText="Phone No:"
              id="tel"
              type="tel"
              className="borderBlack border-2 w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
         outline-none  focus:border-[#a1812e]"
            />
            <label htmlFor="Faculty">Faculty:</label>
            <DropDown />
            <ShowPassword
              labelText="Password:"
              id="confirmPassword"
              icon={false}
              style=""
            />
            <ShowPassword
              labelText="Confirm Password:"
              id="password"
              icon={false}
              style=""
            />
          </div>
        </div>
        <div>
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
            <button className="group lg:mt-2 w-[50rem] h-[3rem] flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]">
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
