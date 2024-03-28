import React from "react";

interface Props {
  labelText: string;
  id: string;
  type: string;
  className: string;
}

const InputField: React.FC<Props> = ({ labelText, id, type, className }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} className={className} />
    </div>
  );
};

export default InputField;
