import React from "react";
interface Props {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.RefObject<HTMLInputElement>;
}

const ResetInput: React.FC<Props> = ({ id, ref, value, onChange }) => {
  return (
    <div className="">
      <input
        type="text"
        className="w-12 text-2xl h-10 p-3 rounded-xl border-2 border-gray-500 outline-none focus:border-[#a1812e]"
        id="number"
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ResetInput;
