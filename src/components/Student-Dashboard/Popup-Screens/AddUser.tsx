/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoClose } from "react-icons/io5";
import InputField from "../../Reusable-Code/InputField";
import FileUpload from "../../Reusable-Code/FileUpload";
import { useState } from "react";
import { BaseUrl } from "../../../service";
import axios from "axios";
import { MdOutlineNotificationsActive } from "react-icons/md";
import DatePickerCalander from "../../Reusable-Code/DatePickerCalander";
import DropDownMenu from "../../Reusable-Code/DropDownMenu";
import Navigation from "../../Reusable-Code/Navigation";
import SideDesign from "../../Reusable-Code/SideDesign";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DropDown from "../../Reusable-Code/DropDown";
import ShowPassword from "../../Reusable-Code/ShowPassword";

interface UploadPopUpProps {
  onClose: any;
  getData: any;
}

function AddUSer({ onClose, getData }: UploadPopUpProps) {
  const initialState = {
    lname: "",
    fname: "",
    mname: "",
    userID: "",
    section: "",
    batch: "",
    confirmPassword: "",
    is_student: true,
    type: "",
    department: "",
    faculty: "",
    phone: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  const handleInputChange = (name: string, value: string) => {
    if (name === "is_student") {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value === "Student" ? true : false,
      }));
    } else {
      setUserData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(userData);
    if (userData.password !== userData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password dont match",
      });
    } else {
      axios
        .post(BaseUrl + "auth/register", userData)
        .then((data) => {
          getData();
          Swal.fire({
            title: data.data.msg,

            icon: "success",
          });
          onClose();
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.error.message || "Something happen",
          });
        });
    }
  };

  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex  justify-center items-center z-10">
      <div className="font-pop my-2   text-gray-500">
        {/* Sign up header */}
        {/* <div className="flex flex-1 justify-between items-center my-5 xs:p-10 lg:space-x-10 text-wrap  xs:w-full lg:text-[2rem]"></div> */}

        {/* container */}
        <div className="xs:mx-[1.5rem] relative bg-white lg:mx-[3rem] my-4 rounded-lg">
          {/* form container */}
          <div className="flex flex-col justify-end mt-5 items-end">
            <IoClose
              onClick={() => onClose(false)}
              style={{ cursor: "pointer" }}
              size={25}
              className=" top-3 right-1"
            />
          </div>
          <form className="">
            <div className="xs:text-[1rem] md:text-[1.2rem] gap-y-2 lg:flex lg:flex-col lg:items-center w-full">
              <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
                <InputField
                  labelText="First Name:"
                  id="fname"
                  onChange={(e) => handleInputChange("fname", e.target.value)}
                  value={userData.fname}
                  type="text"
                  divClassName="flex flex-col xs:w-[80%]"
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
                <InputField
                  labelText="Last Name:"
                  id="lname"
                  type="text"
                  onChange={(e) => handleInputChange("lname", e.target.value)}
                  value={userData.lname}
                  divClassName="flex flex-col xs:w-[80%]"
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
              </div>
              <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
                <InputField
                  labelText="Other Name:"
                  id="mname"
                  onChange={(e) => handleInputChange("mname", e.target.value)}
                  value={userData.mname}
                  type="text"
                  divClassName="flex flex-col xs:w-[80%]"
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
                <InputField
                  labelText="Matric No / Staff ID:"
                  id="userID"
                  onChange={(e) => handleInputChange("userID", e.target.value)}
                  value={userData.userID}
                  type="text"
                  divClassName="flex flex-col xs:w-[80%]"
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
              </div>
              <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
                <InputField
                  labelText="Email:"
                  id="email"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  value={userData.email}
                  type="email"
                  divClassName="flex flex-col xs:w-[80%]"
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
                <InputField
                  labelText="Phone No:"
                  id="phoneNo"
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  type="tel"
                  divClassName="flex flex-col xs:w-[80%]"
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
              </div>

              <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
                <DropDown
                  divClassName="flex flex-col xs:w-[80%]"
                  labelText="Type:"
                  id="dropDown"
                  name="is_student"
                  setSelectOption={handleInputChange}
                  // selectOption={userData.faculty}
                  data={["Student", "Lecturer"]}
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
                <DropDown
                  divClassName="flex flex-col xs:w-[80%]"
                  labelText="Role:"
                  id="dropDown"
                  name="type"
                  setSelectOption={handleInputChange}
                  selectOption={userData.type}
                  data={
                    userData.is_student
                      ? ["MSC", "PGD","PHD"]
                      : [
                          "HOD",
                          "Dean",
                          "Provost",
                          "Departmental PG Coordinator",
                          "Faculty PG Coordinator",
                          "Lecturer",
                        ]
                  }
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
              </div>
              <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
                <DropDown
                  divClassName="flex flex-col xs:w-[80%]"
                  labelText="Faculty:"
                  id="dropDown"
                  name="faculty"
                  setSelectOption={handleInputChange}
                  selectOption={userData.faculty}
                  data={["Faculty of Computing"]}
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
                <DropDown
                  divClassName="flex flex-col xs:w-[80%]"
                  labelText="Department:"
                  id="dropDown"
                  name="department"
                  selectOption={userData.department}
                  setSelectOption={handleInputChange}
                  data={["Computer Science"]}
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
              </div>
              {userData.is_student && (
                <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
                  <DropDown
                    divClassName="flex flex-col xs:w-[80%]"
                    labelText="Session:"
                    id="dropDown"
                    name="section"
                    setSelectOption={handleInputChange}
                    selectOption={userData.section}
                    data={["2020/2021", "2021/2022", "2022/2023"]}
                    className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
                outline-none  focus:border-[#a1812e]"
                  />
                  <DropDown
                    divClassName="flex flex-col xs:w-[80%]"
                    labelText="Batch:"
                    id="dropDown"
                    name="batch"
                    selectOption={userData.batch}
                    setSelectOption={handleInputChange}
                    data={["A", "B", "C"]}
                    className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
                outline-none  focus:border-[#a1812e]"
                  />
                </div>
              )}

              {/* <DropDown
              divClassName="flex flex-col"
              labelText="Type:"
              id="dropDown"
              className="borderBlack border-2 xs:w-[12rem] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
            /> */}
              <div className="flex xs:flex-col xs:items-center xs:justify-center lg:flex-row lg:gap-48">
                <ShowPassword
                  divClassName="flex flex-col xs:w-[80%]  lg:w-full"
                  labelText="Password:"
                  id="confirmPassword"
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
                <ShowPassword
                  divClassName="flex flex-col xs:w-[80%]  lg:w-full"
                  labelText="Confirm Password:"
                  id="password"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="borderBlack border-2 xs:w-[100%] lg:w-[17rem] mb-1 h-[2.5rem] px-2 rounded-[0.7rem]
              outline-none  focus:border-[#a1812e]"
                />
              </div>
              {/* submit btn */}
              <div className="my-1 xs:mx-5">
                <div className="mt-3 flex justify-center">
                  <button
                    onClick={onSubmit}
                    className="group lg:mt-2 w-[50rem] h-[3rem] flex flex-row justify-center items-center px-8 py-2 rounded-xl bg-[#a1812e]"
                  >
                    <span className="text-base text-white">
                      Add {userData.is_student ? "Student" : "Lecturer"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUSer;
