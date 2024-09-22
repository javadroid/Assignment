/* eslint-disable no-empty-pattern */
import { useEffect, useState } from "react";
import Navigation from "../Reusable-Code/Navigation";

import axios from "axios";
import { BaseUrl } from "../../service";
import { useLocation, useNavigate } from "react-router-dom";
import Notification from "../Notifications/Notification";
import ConfirmationPopup from "../Student-Dashboard/Popup-Screens/ConfirmationPopup";
import UploadPopUp from "../Student-Dashboard/Popup-Screens/UploadPopUp";
import ADDSECTION from "../Student-Dashboard/Popup-Screens/ADDSECTION";

interface UploadedProjectProps {}

const ProjectSession: React.FC<UploadedProjectProps> = () => {
  const [uploadData, setUploadData] = useState([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const location = useLocation();
  const state = location.state;
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("state", state);
    // JSON.parse(localStorage.getItem("userdata")!).user
    const data = await axios.post(
      `${BaseUrl}user/getSessionName?id=${
        state
          ? state._id
          : JSON.parse(localStorage.getItem("userdata")!).user_data._id
     ,{   faculty:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.faculty,
      department:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.department,} }`
    );
    console.log(data);
    setUploadData(data.data);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const nativate = useNavigate();

  return (
    <div className='flex overflow-hidden h-screen font-pop'>
      <div className='w-full flex flex-col  '>
        <Navigation />
        <main className='w-full m-0 p-0'>
          <div className='m-4'>
            <div className='flex sm:flex-row justify-between items-center'>
              {/* <h1 className='font-semibold my-2 text-sm lg:text-lg'>
                Project Review
              </h1> */}
              <div className='flex justify-end'></div>
              <Notification />
            </div>
            <hr className='border-gray-400' />
          </div>
        </main>
        <div className='flex flex-col h-full  relative w-3/4'>
          <div className='p-5 overflow-y-auto h-[65%]'>
            <div className='flex flex-col '>
              {uploadData.map((uploadDatas: any, i) => (
                <section key={i} className='w-[90%] h-full'>
                  <div
                    onClick={() => {
                      nativate("/student-projects-hod/"+uploadDatas._id, { state: uploadDatas });
                    }}
                    className='bg-[#f6dd9e] shadow-lg relative pb-4'
                    id={String(i)}>
                    <h3 className='font-semibold text-[1.3rem] my-3 pl-5 border-b-2 border-gray-500 shadow-sm'>
                      {/* {"TOPIC"} */}
                    </h3>
                    <p className='px-5 text-wrap w-[45%] font-medium text-[1rem] pt-3'>
                      {uploadDatas.name}
                    </p>
                    {uploadDatas.type||"type"}
                    <div className='absolute bottom-2 right-10'>
                     
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
         
          
            <div className='absolute bottom-32 right-10'>
              <button
                onClick={togglePopup}
                className='outline-none p-3  w-[10rem] rounded-md bg-[#726135] text-white  hover:scale-110 hover:bg-[#aa9c7a]'>
                New Session
              </button>
              {isPopupOpen && (
                <ADDSECTION getData={getData} onClose={togglePopup} />
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

export default ProjectSession;
