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
    <div className="mb-2">
      <label
        htmlFor={id}
        className="block text-lg font-medium leading-6 text-gray-500"
      >
        {label}
      </label>
      <div className="">
        <input
          type={type}
          className="w-full my-4 h-10 px-3 py-2 rounded-xl pr-8 border-2 border-gray-500 outline-none focus:border-[#a1812e]"
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
