import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Reusable-Code/Button";
import InputField from "./Reusable-Code/InputField";
import ShowPassword from "./Reusable-Code/ShowPassword";

function SignIn() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="component">
      {/* Container */}
      <div className="flex flex-row text-gray-900">
        {/* Side Image */}
        <div className="image basis-1/2 h-screen"></div>
        {/* The Signup page */}
        <div className="basis-1/2 w-full flex flex-col px-40 py-16">
          <div className="flex justify-end">
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
            <form action="">
              <div className="pt-5">
                <div className="mb-10">
                  <InputField
                    labelText="User ID:"
                    id="userID"
                    type="text"
                    divClassName="my-4"
                    className="inputField"
                  />
                  <ShowPassword
                    labelText="Password:"
                    id="password"
                    className="inputField"
                  />
                </div>

                <div className="mb-6">
                  <Button label="Sign In" className="group btn" arrow={true} />
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
}

export default SignIn;
