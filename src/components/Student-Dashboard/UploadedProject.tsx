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
    <div className="lg:h-screen flex flex-row font-pop">
      <SideDesign />
      <div className="w-full">
        <Navigation />
        <div className="grid grid-cols-2 gap-6 lg:h-screen border-none ">
          <div className="bg-[#f6dd9e]  shadow-lg my-[4rem] mx-[5rem] relative">
            <h3 className="font-semibold text-[1.3rem] my-3 pl-5 border-b-2 border-gray-500 shadow-sm">
              TOPIC 1
            </h3>
            <p className="px-5 text-wrap w-full font-medium text-[1.1rem] pt-3">
              MOBILE BASED INFORMATION SYSTEM FOR VEGETABLE FARMING
            </p>
            <button
              disabled
              className="text-white cursor-not-allowed p-2 w-[7rem] outline-none rounded-md absolute bottom-4 bg-[#ef1616] right-5"
            >
              Rejected
            </button>
          </div>
          <div className="bg-[#f6dd9e]  shadow-lg my-[4rem] mx-[5rem] relative">
            <h3 className="font-semibold text-[1.3rem] my-3 pl-5 border-b-2 border-gray-500 shadow-sm">
              TOPIC 2
            </h3>
            <p className="px-5 text-wrap w-full font-medium text-[1.1rem] pt-3">
              DESIGN OF COMPUTERIZED CHILD CARE IMFORMATION SYSYEM
            </p>
            <button
              disabled
              className="text-white cursor-not-allowed p-2 w-[7rem] outline-none rounded-md absolute bottom-4 bg-[#ef1616] right-5"
            >
              Rejected
            </button>
          </div>
          <div className="bg-[#f9e8bc] shadow-lg mb-[7rem] mx-[5rem] relative">
            <h3 className="font-semibold text-[1.3rem] my-3 pl-5 border-b-2 border-gray-500 shadow-sm">
              TOPIC 3
            </h3>
            <p className="px-5 text-wrap w-full font-medium text-[1.1rem] pt-3">
              WEB BASED CIVIL SERVICE PERFORMANCE EVALUATION SYSTEM
            </p>
            <button className="text-white cursor-progress p-2 w-[7rem] outline-none rounded-md absolute bottom-4 bg-[#edbe44] right-5">
              ONGOING
            </button>
          </div>
          <div className=" mb-[7rem] mx-[5rem] relative">
            <button
              onClick={togglePopup}
              className="outline-none p-3  w-[10rem] rounded-md bg-[#726135] text-white absolute bottom-0 right-0"
            >
              Add Project
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
