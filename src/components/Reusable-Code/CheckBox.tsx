import React from "react";

interface CheckBoxProps {
  value: boolean;
  id: string;
  onChange: (newValue: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ value, id, onChange }) => {
  return (
    <input
      className="rounded-full  checked:bg-[#EDBE44] bg-none w-6 h-6"
      type="checkbox"
      id={id}
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default CheckBox;
