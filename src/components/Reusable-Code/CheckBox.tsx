import React, { useEffect, useState } from "react";

interface CheckBoxProps {
  value?: boolean;
  id: string;
  data?:any[],
  dataValue?:any,
  onChange: (newValue: boolean) => void;
}


const CheckBox: React.FC<CheckBoxProps> = ({ value,data,dataValue, id, onChange }) => {
  const [changeData, setchangeData] = useState(data?.includes(dataValue))
useEffect(() => {
  setchangeData(data?.includes(dataValue))
}, [data])

  return (
    <input
      className="checked:bg-[#EDBE44] bg-none w-5 h-5 lg:w-6 lg:h-6"
      type="checkbox"
      id={id}
      checked={changeData}
      // checked={value||data?.includes(dataValue)}
      onChange={(e) => {
        console.log(data?.includes(dataValue))
        onChange(e.target.checked)
      }}
    />
  );
};

export default CheckBox;
