import React, { useState } from "react";
import { lecturersListDataATH } from "../../Utilities/Data";

interface Props {
  id?: string;
  className?: string;
  labelText: string;
  divClassName?: string;
}

const DropDown: React.FC<Props> = ({
  id,
  className,
  labelText,
  divClassName,
}) => {
  const [selectOption, setSelectOption] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectOption(event.target.value);
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
        {lecturersListDataATH.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
