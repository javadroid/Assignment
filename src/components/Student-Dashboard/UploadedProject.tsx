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
    <div className="h-screen flex flex-row">
      <SideDesign />
      <div className="w-full">
        <Navigation />
        <div>
          <button onClick={togglePopup} className="border-solid bg-indigo-500">
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
  );
}

export default UploadedProject;
