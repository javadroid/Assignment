/* eslint-disable no-empty-pattern */
import { useEffect, useState } from "react";
import Navigation from "../Reusable-Code/Navigation";
import SideDesign from "../Reusable-Code/SideDesign";
import UploadPopUp from "./Popup-Screens/UploadPopUp";
import ConfirmationPopup from "./Popup-Screens/ConfirmationPopup";
import { uploadDataATH } from "../../Utilities/Data";
import axios from "axios";
import { BaseUrl } from "../../service";
import { useNavigate } from "react-router-dom";

interface UploadedProjectProps {}

function UploadedProject({}: UploadedProjectProps) {
  const [uploadData,setUploadData] = useState([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
getData()
  }, [])
  
  const getData = async () => {
   const data=await axios.get(`${BaseUrl}user/project`)
   console.log(data)
   setUploadData(data.data) 
  };
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const nativate=useNavigate()

  return (
    <div className="lg:h-screen lg:overflow-hidden flex flex-row font-pop">
      <SideDesign />
      <div className="w-full">
        <Navigation />
        <div className="flex sm:relative lg:space-x-1 lg:h-screen border-none">
          <div className="md:grid md:grid-cols-1 lg:flex  lg:flex-row  items-center">
            {uploadData.map((uploadDatas:any, i) => (
                <section
                  key={i}
                  className="w-[100%] grid sm:grid-rows-2 lg:grid-cols-2 h-[100%]"
                >
                  <div
                  onClick={()=>{
                    nativate("/view-uploaded",{ state: uploadDatas })
                  }}
                    className="bg-[#f6dd9e] shadow-lg mt-5 h-2/3 lg:mt-10 ml-[5rem] w-full lg:h-2/3 lg:w-full relative"
                    id={String(i)}
                  >
                    <h3 className="font-semibold text-[1.3rem] my-3 pl-5 border-b-2 border-gray-500 shadow-sm">
                      {"TOPIC"}
                    </h3>
                    <p className="px-5 text-wrap w-full font-medium text-[1rem] pt-3">
                      {uploadDatas.name}
                    </p>
                    <div>
                      {uploadDatas.status !=="rejected" ? (
                        <div className="text-white text-center cursor-not-allowed p-2 w-[7rem] outline-none rounded-md absolute bottom-4 bg-[#ef1616] right-5">
                          Rejected
                        </div>
                      ) : (
                        <div className="text-white text-center cursor-progress p-2 w-[7rem] outline-none rounded-md absolute bottom-4 bg-[#edbe44] right-5">
                          ONGOING
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}

           
          </div>
          <div className="mb-[7rem] mx-[5rem] lg:mx-[5rem] sm:absolute bottom-5 right-5  lg:relative">
            <button 
              onClick={togglePopup}
              className="outline-none p-3  w-[10rem] rounded-md bg-[#726135] text-white absolute bottom-5 right-5 lg:right-20 hover:scale-110 hover:bg-[#aa9c7a]"
            >
              Add Project
            </button>
            {isPopupOpen && (
              <UploadPopUp getData={getData} onClose={togglePopup}  />
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
