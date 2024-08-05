/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoClose } from "react-icons/io5";
import InputField from "../../Reusable-Code/InputField";
import FileUpload from "../../Reusable-Code/FileUpload";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../../service";
import axios from "axios";
import { MdOutlineNotificationsActive } from "react-icons/md";
import DatePickerCalander from "../../Reusable-Code/DatePickerCalander";
import DropDownMenu from "../../Reusable-Code/DropDownMenu";
import Navigation from "../../Reusable-Code/Navigation";
import SideDesign from "../../Reusable-Code/SideDesign";

interface UploadPopUpProps {
  onClose: any;
  getData?: any;
  selectedStudent?:any
}

function AssignSupervisor({ onClose, selectedStudent,getData }: UploadPopUpProps) {
  const [projectTopic, setProjectTopic] = useState<string | []>([]);
  const [major, setMajor] = useState() as any;
  const [minor, setMinor] = useState() as any;
  const onPickPDF = (event: any) => {};
  const [showSideBar, setShowSideBar] = useState(true);
  const sildeBarClick = () => {
    setShowSideBar(!showSideBar);
  };
useEffect(() => {
 
}, [])

  
  const handleSubmit = () => {

    axios.post(BaseUrl + "auth/supervisor",{major,minor,selectedStudent}).then(()=>{
      getData()
      onClose()
    })
    console.log(major,minor,selectedStudent)
  };

  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex  justify-center items-center z-10">
      <div className="font-pop  flex flex-row lg:overflow-hidden bg-gray-100">
        <div className="w-full text-black">
          <main className="w-full m-0 p-0 ">
            <div className="m-4">
              <div className="flex sm:flex-row justify-between items-center">
                <h1 className="font-semibold my-2 text-sm lg:text-lg">
                  Assign Supervisors
                </h1>
                <div className="flex flex-col ">
                  <IoClose
                    onClick={() => onClose(false)}
                    style={{ cursor: "pointer" }}
                    size={25}
                    // className="absolute bottom-3 right-1"
                  />
                </div>
              </div>
              <hr className="border-gray-400" />
            </div>
          </main>
          <div className="mx-10">
            {/* DropDown Menu */}
            <div className="w-full ">
              <DropDownMenu setData={setMajor} label="Assign Major" className="" />
            </div>
            <div className="w-full ">
              <DropDownMenu setData={setMinor} label="Assign Minor" className="" />
            </div>
            {/* Lecturer Display Panel */}
            <button
              onClick={handleSubmit}
              type="button"
              className="font-pop text-white font-medium outline-none rounded-[0.9rem] ml-[21rem] border-2 bg-[#726135] mt-5 w-[5rem] p-2 hover:bg-[#54462f]"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignSupervisor;
