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
    <div className="mb-2 lg:mb-8 xl:mb-12">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-500 lg:text-xl lg:mb-2  xl:text-3xl"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full my-1 px-2 py-1 rounded-xl pr-10 border-2 border-gray-500 outline-none focus:border-[#a1812e] sm:py-1.5 lg:p-3 xl:p-4 xl:text-lg"
          id={id}
          ref={ref}
          value={value}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 right-2 flex items-center pr-2">
          {showPassword ? (
            <FaEyeSlash
              onClick={passwordChange}
              className="text-gray-500 lg:text-lg xl:text-3xl"
            />
          ) : (
            <FaEye
              onClick={passwordChange}
              className="text-gray-500 lg:text-lg xl:text-3xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Password;
