import React from "react";
interface Props {
  id: string;
}

const ResetInput: React.FC<Props> = ({ id }) => {
  return (
    <div className="">
      <input
        type="text"
        className="w-12 text-2xl h-10 p-3 rounded-xl border-2 border-gray-500 outline-none focus:border-[#a1812e]"
        id={id}
      />
    </div>
  );
};

export default ResetInput;
