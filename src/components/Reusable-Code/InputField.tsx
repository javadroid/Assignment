import React, { ChangeEvent, useState } from "react";

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
  const [val, setValue] = useState(value)
  const handled = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
   if(onChange){
    onChange(e);
   }
   
  };
  return (
    <div className={divClassName}>
      <label htmlFor={id}>{labelText}</label>
      <input
        value={val}
        type={type}
        id={id}
        className={className}
        onChange={handled}
      />
    </div>
  );
};

export default InputField;
