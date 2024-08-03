import React, { ChangeEvent } from "react";

interface Props {
  labelText: string;
  id: string;
  type: string;
  value?: any;
  className: string;
  divClassName?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  labelText,
  id,
  type,
  className,
  divClassName,
  value,
  onChange,
}) => {
  return (
    <div className={divClassName}>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} className={className} onChange={onChange} />
    </div>
  );
};

export default InputField;
