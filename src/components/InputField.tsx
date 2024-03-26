import React from "react";

interface Props {
  labelText: string;
  id: string;
  type: string;
}

const InputField: React.FC<Props> = ({ labelText, id, type }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        className="borderBlack border-2 w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
         outline-none  focus:border-[#a1812e]"
      />
    </div>
  );
};

export default InputField;
