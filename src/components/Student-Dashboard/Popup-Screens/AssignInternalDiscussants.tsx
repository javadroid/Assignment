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
import Swal from "sweetalert2";

interface UploadPopUpProps {
  onClose: any;
  getData?: any;
  selectedStudent?: any;
  label: any;
}

function AssignInternalDiscussants({
  onClose,
  selectedStudent,
  getData,
  label,
}: UploadPopUpProps) {
  const [projectTopic, setProjectTopic] = useState<string | []>([]);
  const [major, setMajor] = useState() as any;
  const [minor, setMinor] = useState() as any;
  const onPickPDF = (event: any) => {};
  const [showSideBar, setShowSideBar] = useState(true);
  const sildeBarClick = () => {
    setShowSideBar(!showSideBar);
  };
  useEffect(() => {}, []);

  const handleSubmit = () => {

   
    if(major){
      axios
      .post(BaseUrl + "user/session", {
        session: selectedStudent.session,
        type: selectedStudent.type,
        batch: selectedStudent.batch,
        internal_discussants: major

      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
        });

        getData();
      });
    }
    if(minor){
      axios
      .post(BaseUrl + "user/session", {
        session: selectedStudent.session,
        type: selectedStudent.type,
        batch: selectedStudent.batch,
       
        "proposal_defense.date": String(minor),
        proposal_defense:{
          date:String(minor)
        }

      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
        });

        getData();
      });
    }
  };

  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex  justify-center items-center z-10">
      <div className="font-pop  flex flex-row lg:overflow-hidden bg-gray-100">
        <div className="w-full text-black">
          <main className="w-full m-0 p-0 ">
            <div className="m-4">
              <div className="flex sm:flex-row justify-between items-center">
                <h1 className="font-semibold my-2 text-sm lg:text-lg">
                  Assign {label}
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
              <DropDownMenu
                setData={setMajor}
                label={"Assign " + label}
                className=""
              />
            </div>
            <div className="w-full ">
              <div>Set / Change for Proposal Defense</div>
              <input
                onChange={(e) => setMinor(new Date(e.target.value).getTime())}
                type="date"
              />
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

export default AssignInternalDiscussants;
