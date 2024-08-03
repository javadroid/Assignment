import React from "react";
import { GoArrowRight } from "react-icons/go";
interface Props {
  label: string;
  className: string;
  arrow: boolean;
  type?: string;
}

const Button: React.FC<Props> = ({ label, className, arrow, type }) => {
  return (
    <div className="mb-4">
      <button type={"submit"} className={className}>
        <span className="text-white">{label}</span>
        {arrow ? (
          <GoArrowRight className="ml-2 text-xl text-white opacity-90 group-hover:translate-x-1 transition" />
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Button;
