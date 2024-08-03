import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./Reusable-Code/DropDown";
import "../index.css";
import { GoArrowRight } from "react-icons/go";
import InputField from "./Reusable-Code/InputField";
import ShowPassword from "./Reusable-Code/ShowPassword";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp: React.FC = () => {
  const initialState = {
    lname: "",
    fname: "",
    mname:"",
    userID:"",
    confirmPassword:"",
    is_student: true,
    type: "",
    department: "",
    faculty: "",
    phone: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password dont match",
      });
    } else {
      axios
        .post("https://hodbackend.onrender.com/api/v1/auth/register", userData)
        .then((data) => {
          localStorage.setItem("userdata", JSON.stringify(data.data));

          Swal.fire({
            title: data.data.msg,

            icon: "success",
          });

          navigate("/");
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.error.message || "Something happen",
          });
        });
    }
    console.log(userData);
  };

  return (
    <div className="font-pop xs:overflow-auto xs:m-auto lg:h-screen lg:overflow-auto lg:px-28 text-gray-500">
      {/* Sign up header */}
      <div className="flex flex-1 justify-between items-center my-5 xs:p-10 lg:space-x-10 text-wrap  xs:w-full lg:text-[2rem]">
        <div className="flex flex-col items-center justify-center lg:mr-32">
          <h1
            style={{ fontFamily: "Poppins" }}
            className="xs:text-[2rem] md:text-[3rem] font-semibold text-black md:text-5xl md:mb-3"
          >
            Sign Up
          </h1>
          <caption className="flex flex-row font-medium  text-[0.8rem]">
            Fill in your details to sign up
          </caption>
        </div>

        <div className="flex flex-col items-center justify-center">
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
        {/* form container */}
        <form className="">
          <div className="xs:text-[1rem] md:text-[1.2rem] gap-y-2 lg:flex lg:flex-col lg:items-center">
            <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
              <InputField
                labelText="First Name:"
                id="fname"
                onChange={(e) => handleInputChange("fname", e.target.value)}
                value={userData.fname}
                type="text"
                divClassName="flex flex-col xs:w-[80%]"
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <InputField
                labelText="Last Name:"
                id="lname"
                type="text"
                onChange={(e) => handleInputChange("lname", e.target.value)}
                value={userData.lname}
                divClassName="flex flex-col xs:w-[80%]"
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
              <InputField
                labelText="Middle Name:"
                id="mname"
                type="text"
                onChange={(e) => handleInputChange("mname", e.target.value)}
                value={userData.mname}
                divClassName="flex flex-col xs:w-[80%]"
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <InputField
                labelText="Phone No:"
                id="phoneNo"
                onChange={(e) => handleInputChange("phone", e.target.value)}
                type="tel"
                divClassName="flex flex-col xs:w-[80%]"
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            <div className="flex justify-between ">
              <InputField
                labelText="Matric No:"
                id="userID"
                type="text"
                onChange={(e)=>handleInputChange("userID",e.target.value)}
                value={userData.userID}
                divClassName="flex flex-col"
                className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            
            <div className="flex justify-between">
              <InputField
                labelText="Email:"
                id="email"
                onChange={(e) => handleInputChange("email", e.target.value)}
                value={userData.email}
                type="email"
                divClassName="flex flex-col xs:w-[80%]"
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <DropDown
                divClassName="flex flex-col xs:w-[80%]"
                labelText="Faculty:"
                id="dropDown"
                name="faculty"
                setSelectOption={handleInputChange}
                selectOption={userData.faculty}
                data={["Faculty of Computing"]}
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
              <DropDown
                divClassName="flex flex-col xs:w-[80%]"
                labelText="Department:"
                id="dropDown"
                name="department"
                selectOption={userData.department}
                setSelectOption={handleInputChange}
                data={["Computer Science"]}
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <DropDown
                divClassName="flex flex-col xs:w-[80%]"
                labelText="Type:"
                id="dropDown"
                name="type"
                selectOption={userData.type}
                setSelectOption={handleInputChange}
                data={["MSC", "PHD"]}
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            {/* <DropDown
              divClassName="flex flex-col"
              labelText="Type:"
              id="dropDown"
              className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
            /> */}
            <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
              <ShowPassword
                divClassName="flex flex-col xs:w-[80%]  lg:w-full"
                labelText="Password:"
                id="confirmPassword"
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
              <ShowPassword
                divClassName="flex flex-col xs:w-[80%]  lg:w-full"
                labelText="Confirm Password:"
                id="password"
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
              />
            </div>
            {/* submit btn */}
            <div className="my-10 xs:mx-5">
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
                  onClick={onSubmit}
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
