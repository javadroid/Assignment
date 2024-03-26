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
        className={`${type} w-full flex flex-row justify-center items-center px-8 py-2.5 rounded-xl bg-[#a1812e] lg:py-3`}
      >
        <span className="text-sm text-white lg:text-xl xl:text-3xl">
          {label}
        </span>
        {arrow ? (
          <GoArrowRight className="ml-2 text-base text-white opacity-70 group-hover:translate-x-1 transition lg:text-2xl xl:text-4xl" />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Button;
