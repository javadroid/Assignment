import React, { useState } from "react";
import "../index.css";

function DropDown() {
  const [selectOption, setSelectOption] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectOption(event.target.value);
  };
  return (
    <div>
      <select
        id="dropDown"
        value={selectOption}
        onChange={handleChange}
        className="borderBlack border-2 w-[17rem] mb-1 h-[2.5rem] px-2  rounded-[0.7rem]
        outline-none  focus:border-[#a1812e]
        "
      >
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default DropDown;
