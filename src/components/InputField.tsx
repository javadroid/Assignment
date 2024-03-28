import React from "react";

interface Props {
  labelText: string;
  id: string;
  type: string;
  className: string;
  divClassName: string;
}

const InputField: React.FC<Props> = ({
  labelText,
  id,
  type,
  className,
  divClassName,
}) => {
  return (
    <div className={divClassName}>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} className={className} />
    </div>
  );
};

export default InputField;
