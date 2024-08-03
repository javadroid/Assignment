import React, { useState } from "react";
import { deptListDataATH } from "../../Utilities/Data";

interface Props {
  id?: string;
  className?: string;
  labelText: string;
  divClassName?: string;
  data?: any[];
  setSelectOption?: any;
  selectOption?: string;
  name?: string;
}

const DropDown: React.FC<Props> = ({
  id,
  className,
  labelText,
  divClassName,
  data,
  name,
  setSelectOption,
  selectOption,
}) => {
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectOption(name, event.target.value);
  };
  return (
    <div className={divClassName}>
      <label htmlFor="">{labelText}</label>
      <select
        id={id}
        value={selectOption}
        onChange={handleChange}
        className={className}
      >
        <option value="" disabled>
          <em>Select...</em>
        </option>
        {data?.map((name: any) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
