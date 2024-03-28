import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
interface Props {
  labelText: string;
  id: string;
  className: string;
}

const ShowPassword: React.FC<Props> = ({ labelText, id, className }) => {
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
          className={className}
        />
        <div className="absolute top-3 right-10">
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
