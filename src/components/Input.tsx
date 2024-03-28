import React from "react";
interface Props {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ label, id, type, value, onChange, ref }) => {
  return (
    <div className="mb-2 lg:mb-8 xl:mb-12">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-500 lg:text-xl lg:mb-2 xl:text-3xl"
      >
        {label}
      </label>
      <div className="">
        <input
          type={type}
          className="w-full my-1 px-3 py-1 rounded-xl pr-8 border-2 border-gray-500 outline-none focus:border-[#a1812e] sm:py-1.5 lg:p-3 xl:p-4 xl:text-lg"
          id={id}
          ref={ref}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
