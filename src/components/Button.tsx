import React from "react";
import { GoArrowRight } from "react-icons/go";
interface Props {
  label: string;
  type: string;
  arrow: boolean;
}

const Button: React.FC<Props> = ({ label, type, arrow }) => {
  return (
    <div className="mb-4">
      <button
        className={`${type} w-full flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]`}
      >
        <span className="text-base text-white">{label}</span>
        {arrow ? (
          <GoArrowRight className="ml-2 text-xl text-white opacity-70 group-hover:translate-x-1 transition" />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Button;
