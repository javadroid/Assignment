import React from "react";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
interface LogoutScreenProps {
  onClose: () => void;
}

const LogoutScreen = ({ onClose }: LogoutScreenProps) => {
  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex justify-center items-center z-10">
      <div className="bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]  shadow-lg">
        <div className="flex flex-col">
          <div className="my-2">
            <h3 className="flex flex-col mb-2">Logout Now</h3>
            <caption className="flex justify-center">Confirm Process:</caption>
          </div>
          <div className="mx-[5rem] flex flex-row justify-between">
            <IoClose
              onClick={onClose}
              style={{ cursor: "pointer", fill: "#e11d48" }}
              size={35}
            />
            <Link to={"/"}>
              <IoMdCheckmark size={35} style={{ fill: "#a1812e" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutScreen;
