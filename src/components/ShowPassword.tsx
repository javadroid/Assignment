import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
interface Props {
  labelText: string;
  id: string;
}

const ShowPassword: React.FC<Props> = ({ labelText, id }) => {
  const [showPassword, setPasswordVisible] = useState(false);
  const passwordChange = () => {
    setPasswordVisible(!showPassword);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{labelText}</label>
      <div className="flex items-center relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          className="borderBlack w-[17rem] my-4 h-[2.5rem] px-1 border-2 rounded-[0.7rem] outline-none  focus:border-[#a1812e]"
        />
        <div className="absolute right-2">
          {showPassword ? (
            <FaEyeSlash onClick={passwordChange} />
          ) : (
            <FaEye onClick={passwordChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowPassword;
