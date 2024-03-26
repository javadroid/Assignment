import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
interface Props {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.RefObject<HTMLInputElement>;
}

const Password: React.FC<Props> = ({ label, id, value, onChange, ref }) => {
  const [showPassword, setPasswordVisible] = useState(false);

  const passwordChange = () => {
    setPasswordVisible(!showPassword);
  };

  return (
    <div className="mb-2">
      <label
        htmlFor={id}
        className="block text-lg font-medium leading-6 text-gray-500"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full my-4 h-10 px-2 rounded-xl pr-10 border-2 border-gray-500 outline-none focus:border-[#a1812e]"
          id={id}
          ref={ref}
          value={value}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 right-2 flex items-center pr-2">
          {showPassword ? (
            <FaEyeSlash onClick={passwordChange} className="text-gray-500" />
          ) : (
            <FaEye onClick={passwordChange} className="text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Password;
