import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ResetInput from "./ResetInput";

const ResetPassword = () => {
  const [number, setNumber] = useState("");
  const numberRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="font-pop h-screen w-screen text-base border-gray-500">
      <div className="flex flex-row text-gray-900">
        <div className="image basis-1/2 h-screen"></div>
        <div className="basis-1/2 flex flex-col pt-16 px-16 pb-12">
          <div className="flex flex-row justify-end mb-16">
            <p className="font-medium">
              Don't have an account?{" "}
              <Link to={"/SignUp"} className="text-[#a1812e] font-medium">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-gray-700 text-4xl pb-4">
              Reset Password
            </h1>
            <p className="text-gray-500 text-base mb-10 w-2/3">
              Please input the six digit code that was sent to your email
              address.
            </p>
            <form action="">
              <div className="pt-6">
                <div className="w-full flex justify-center">
                  <div className="w-5/6 mb-16 flex flex-row justify-between">
                    <ResetInput
                      id="number"
                      ref={numberRef}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <ResetInput
                      id="number"
                      ref={numberRef}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <ResetInput
                      id="number"
                      ref={numberRef}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <ResetInput
                      id="number"
                      ref={numberRef}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <ResetInput
                      id="number"
                      ref={numberRef}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <ResetInput
                      id="number"
                      ref={numberRef}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-base font-light">
                    Didn't receive your code?{" "}
                    <Link to={"/"} className="text-[#a1812e]">
                      Resend Code
                    </Link>
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    label="Verify and Proceed"
                    className="button w-sm flex flex-row justify-center items-center px-8 py-2.5 rounded-xl bg-[#a1812e]"
                    arrow={false}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;