import { Link, useNavigate } from "react-router-dom";
import Button from "./Reusable-Code/Button";
import InputField from "./Reusable-Code/InputField";
import ShowPassword from "./Reusable-Code/ShowPassword";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/UserSlice";
import { AppDispatch } from "../app/store";
import axios from "axios";
import Swal from "sweetalert2";

const SignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Typing dispatch with AppDispatch
  const navigate = useNavigate();

  // State for form fields and errors
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  // Handle form submission
  const handSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post("https://hodbackend.onrender.com/api/v1/auth/login",{email,password}).then((data)=>{
      localStorage.setItem("userdata",JSON.stringify(data.data))
       
       Swal.fire({
        title: data.data.msg,
        
        icon: "success"
      });

      navigate("../")
    }).catch((err)=>{
      console.log(err.response.data.error.message)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error.message||"Something happen",
        
      });
    })
  };

  // Handle input changes
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  return (
    <div className="lg:overflow-hidden font-pop h-screen text-gray-500">
      {/* Container */}
      <div className="h-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between lg:w-full text-gray-900">
        {/* Side Image */}
        <div className="image lg:w-1/2 xl:w-2/3 hidden lg:block h-screen bg-cover bg-center lg:overflow-hidden"></div>
        {/* The SignIn page */}
        <div className="lg:w-1/2 xl:w-1/3 p-10 lg:p-20 flex flex-col justify-center ">
          <div className="flex justify-end mb-4">
            <caption className="text-sm">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-[#a1812e]">
                Sign Up!
              </Link>
            </caption>
          </div>
          <div className="pt-20 flex flex-col">
            <h1 className="pb-2 font-bold text-gray-700 text-4xl">Sign In</h1>
            <caption className="flex">Fill in your details to sign in</caption>
            {/* form container */}
            <form onSubmit={handSubmit}>
              <div className="pt-5">
                <div className="mb-10">
                  <InputField
                    labelText="Email:"
                    id="email"
                    type="email"
                    divClassName="my-4"
                    className={`inputField ${
                      emailError ? "errorInputField" : ""
                    }`}
                    onChange={handleEmailChange}
                    value={email}
                  />
                  <ShowPassword
                    labelText="Password:"
                    id="password"
                    className={`inputField ${
                      passwordError ? "errorInputField" : ""
                    }`}
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </div>

                <div className="mb-6">
                  <Button
                    label="Sign In"
                    type="submit"
                    className="group btn"
                    arrow={true}
                  />
                </div>

                <div className="pt-4 flex">
                  <caption className="">
                    Forget your password?{" "}
                    <Link to={"/forget"} className="text-[#a1812e]">
                      Reset Now!
                    </Link>
                  </caption>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
