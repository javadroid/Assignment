/* eslint-disable no-empty-pattern */
import { useEffect, useState } from "react";
import Navigation from "../Reusable-Code/Navigation";
import UploadPopUp from "./Popup-Screens/UploadPopUp";
import ConfirmationPopup from "./Popup-Screens/ConfirmationPopup";
import axios from "axios";
import { BaseUrl } from "../../service";
import { useNavigate } from "react-router-dom";

interface UploadedProjectProps {}

const UploadedProject: React.FC<UploadedProjectProps> = () => {
  const [uploadData, setUploadData] = useState([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(`${BaseUrl}user/project`);
    console.log(data);
    setUploadData(data.data);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const nativate = useNavigate();

  return (
    <div className="flex overflow-hidden h-screen font-pop">
      <div className="w-full">
        <Navigation />
        <div className="flex flex-col h-full relative">
          <div className="p-5 overflow-y-auto h-[65%]">
            <div className="flex flex-col ">
              {uploadData.map((uploadDatas: any, i) => (
                <section key={i} className="w-[90%] h-full">
                  <div
                    onClick={() => {
                      nativate("/view-uploaded", { state: uploadDatas });
                    }}
                    className="bg-[#f6dd9e] shadow-lg relative pb-4"
                    id={String(i)}
                  >
                    <h3 className="font-semibold text-[1.3rem] my-3 pl-5 border-b-2 border-gray-500 shadow-sm">
                      {"TOPIC"}
                    </h3>
                    <p className="px-5 text-wrap w-[45%] font-medium text-[1rem] pt-3">
                      {uploadDatas.name}
                    </p>
                    <div className="absolute bottom-2 right-10">
                      {uploadDatas.status === "rejected" ? (
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
          <div className="absolute bottom-32 right-10">
            {
              uploadData.length<1&&<button
              onClick={togglePopup}
              className="outline-none p-3  w-[10rem] rounded-md bg-[#726135] text-white  hover:scale-110 hover:bg-[#aa9c7a]"
            >
              Add Project
            </button>
            }
            
            {isPopupOpen && (
              <UploadPopUp getData={getData} onClose={togglePopup} />
            )}
            {showConfirmation && (
              <ConfirmationPopup onClose={() => setShowConfirmation(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedProject;
