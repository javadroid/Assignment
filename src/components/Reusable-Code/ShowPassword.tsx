import React, { ChangeEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
interface Props {
  labelText: string;
  id: string;
  className?: string;
  divClass?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ShowPassword: React.FC<Props> = ({
  labelText,
  id,
  className,
  onChange,
  divClass,
  value,
}) => {
  const [showPassword, setPasswordVisible] = useState(false);
  const passwordChange = () => {
    setPasswordVisible(!showPassword);
  };
  return (
    <div className="flex flex-col xs:w-[80%]">
      <label htmlFor={id}>{labelText}</label>
      <div className={`flex items-center relative ${divClass}`}>
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          className={className}
          onChange={onChange}
        />
        {/* removed top-3 not needed */}
        <div className="absolute right-3">
          {showPassword ? (
            <FaEyeSlash className="text-gray-500" onClick={passwordChange} />
          ) : (
            <FaEye className="text-gray-500" onClick={passwordChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowPassword;
