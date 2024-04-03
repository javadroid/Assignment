import { useState } from "react";
import Navigation from "../Reusable-Code/Navigation";
import SideDesign from "../Reusable-Code/SideDesign";
import UploadPopUp from "./Popup-Screens/UploadPopUp";

function UploadedProject() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
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
          {isPopupOpen && <UploadPopUp onClose={togglePopup} />}
        </div>
      </div>
    </div>
  );
}

export default UploadedProject;
