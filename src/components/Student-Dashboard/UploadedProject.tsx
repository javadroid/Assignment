/* eslint-disable no-empty-pattern */
import { useState } from "react";
import Navigation from "../Reusable-Code/Navigation";
import SideDesign from "../Reusable-Code/SideDesign";
import UploadPopUp from "./Popup-Screens/UploadPopUp";
import ConfirmationPopup from "./Popup-Screens/ConfirmationPopup";

interface UploadedProjectProps {}

function UploadedProject({}: UploadedProjectProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSubmit = () => {
    // Set showConfirmation to true after the form is submitted
    setShowConfirmation(true);
    setIsPopupOpen(false);
  };

  return (
    <div className="h-screen flex flex-row font-pop">
      <SideDesign />
      <div className="w-full">
        <Navigation />
        <div className="grid grid-cols-2 gap-6 h-screen border-none ">
          <div className="border-2 my-[4rem] mx-[5rem]">
            <h3 className="font-semibold text-[1.2rem] my-3 pl-5 border-b-2 shadow-sm">
              TOPIC 1
            </h3>
            <p>Description of topic 1.</p>
          </div>
          <div className="border-2 my-[4rem] mx-[5rem]">
            <h3 className="font-semibold text-[1.2rem] my-3 pl-5 border-b-2 shadow-sm">
              TOPIC 2
            </h3>
            <p>Description of topic 2.</p>
          </div>
          <div className="border-2 mb-[7rem] mx-[5rem]">
            <h3 className="font-semibold text-[1.2rem] my-3 pl-5 border-b-2 shadow-sm">
              TOPIC 3
            </h3>
            <p>Description of topic 3.</p>
          </div>
          <div className="border-2 mb-[7rem] mx-[5rem] relative">
            <button
              onClick={togglePopup}
              className="border-solid bg-indigo-500 absolute bottom-0 right-0"
            >
              Click Me
            </button>
            {isPopupOpen && (
              <UploadPopUp onClose={togglePopup} onSubmit={handleSubmit} />
            )}
            {showConfirmation && (
              <ConfirmationPopup onClose={() => setShowConfirmation(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadedProject;
