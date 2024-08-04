/* eslint-disable no-empty-pattern */
import { useState } from "react";
import Navigation from "../Reusable-Code/Navigation";
import SideDesign from "../Reusable-Code/SideDesign";
import UploadPopUp from "./Popup-Screens/UploadPopUp";
import ConfirmationPopup from "./Popup-Screens/ConfirmationPopup";
import { uploadDataATH } from "../../Utilities/Data";

interface UploadedProjectProps {}

function UploadedProject({}: UploadedProjectProps) {
  const [uploadData] = useState(uploadDataATH);

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
    <div className="flex overflow-hidden h-screen font-pop">
      <SideDesign />
      <div className="w-full">
        <Navigation />
        <div className="flex flex-col h-full relative">
          {/* uploaded cards */}
          <div className=" p-5 overflow-y-auto h-[65%]">
            <div className="flex flex-col ">
              {uploadData.map((uploadDatas, i) => (
                <section key={i} className="w-[90%] h-full">
                  <div
                    className="bg-[#f6dd9e] shadow-lg relative pb-4"
                    id={String(i)}
                  >
                    <h3 className="font-semibold text-[1.3rem] my-3 pl-5 border-b-2 border-gray-500 shadow-sm">
                      {uploadDatas.topicNo}
                    </h3>
                    <p className="px-5 text-wrap w-[45%] font-medium text-[1rem] pt-3">
                      {uploadDatas.mainTopic}
                    </p>
                    <div className="absolute bottom-2 right-10">
                      {!uploadDatas.button ? (
                        <div className="text-white text-center cursor-not-allowed p-2 w-[7rem] outline-none rounded-md  bg-[#ef1616] right-5">
                          Rejected
                        </div>
                      ) : (
                        <div className="text-white text-center cursor-progress p-2 w-[7rem] outline-none rounded-md  bg-[#edbe44] right-5">
                          ONGOING
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* upload btn */}
          <div className="absolute bottom-32 right-10">
            <button
              onClick={togglePopup}
              className="outline-none p-3  w-[10rem] rounded-md bg-[#726135] text-white  hover:scale-110 hover:bg-[#aa9c7a]"
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
