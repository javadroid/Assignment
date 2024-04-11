import React from "react";
import { Link } from "react-router-dom";
interface ConfirmationPopUpProps {
  onClose: () => void;
}

// eslint-disable-next-line no-empty-pattern
function ConfirmationPopup({}: ConfirmationPopUpProps) {
  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex justify-center items-center z-10">
      <div className="flex flex-col items-center bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]">
        <h2 className="font-bold">Project Topic Updated Successfully!</h2>
        <Link to={"/dash"}>
          <button
            type="submit"
            className="font-pop text-white font-medium outline-none rounded-[0.9rem]  border-2 bg-[#726135] mt-5 w-[15rem] p-2 hover:bg-[#54462f]"
          >
            Process to dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
