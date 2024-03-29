import React from "react";
interface Props {
  id: string;
}

const ResetInput: React.FC<Props> = ({ id }) => {
  return (
    <div className="">
      <input type="text" className="resetInput" id={id} />
    </div>
  );
};

export default ResetInput;
