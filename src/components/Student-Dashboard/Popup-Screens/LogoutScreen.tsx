import React from "react";
import { IoClose } from "react-icons/io5";
interface LogoutScreenProps {
  onClose: () => void;
}

const LogoutScreen = ({ onClose }: LogoutScreenProps) => {
  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex justify-center items-center z-10">
      <div className="bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]  shadow-lg">
        <div className="flex flex-col">
          <caption>Hello</caption>
          <IoClose
            onClick={onClose}
            style={{ cursor: "pointer" }}
            size={25}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default LogoutScreen;
