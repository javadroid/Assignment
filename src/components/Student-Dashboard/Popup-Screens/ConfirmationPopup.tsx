import React from "react";
interface ConfirmationPopUpProps {
  onClose: () => void;
}

// eslint-disable-next-line no-empty-pattern
function ConfirmationPopup({}: ConfirmationPopUpProps) {
  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex justify-center items-center z-10">
      <div className="bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]">
        hello
        <button
          type="submit"
          className="font-pop text-white font-medium outline-none rounded-[0.9rem] ml-[21rem] border-2 bg-[#726135] mt-5 w-[5rem] p-2 hover:bg-[#54462f]"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
