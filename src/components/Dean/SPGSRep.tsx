import React, { useState } from "react";
import Navigation from "../Reusable-Code/Navigation";
import { MdOutlineNotificationsActive } from "react-icons/md";
import DropDownMenu from "../Reusable-Code/DropDownMenu";
import DatePickerCalander from "../Reusable-Code/DatePickerCalander";
import DropDown from "../Reusable-Code/DropDown";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseUrl } from "../../service";
import Notification from "../Notifications/Notification";

export default function SPGSRep() {
  const [section, setsection] = useState("2020/2021");
  const [batch, setbatch] = useState("A");
  const [type, settype] = useState("MSC");
  const [select, setselect] = useState();

  const submit = () => {
    axios
      .post(BaseUrl + "user/session", {
        session: section,
        type,
        batch,
        spgs: select,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
        });
      });
  };
  return (
    <div className='font-pop h-screen flex flex-row lg:overflow-hidden bg-gray-100'>
      <div className='w-full text-black'>
        <Navigation />
        <main className='w-full m-0 p-0 '>
          <div className='m-4'>
            <div className='flex sm:flex-row justify-between items-center'>
              <h1 className='font-semibold my-2 text-sm lg:text-lg'>
                Assign Internal Discussants
              </h1>
              <Notification />
            </div>
            <hr className='border-gray-400' />
          </div>
        </main>
        <div className='mx-10'>
          <div className='flex mb-10 flex-row'>
            <DropDown
              // divClassName="flex flex-col xs:w-[30%]"
              labelText='Session:'
              id='dropDown'
              setSelectOption={(e: any, i: any) => setsection(i)}
              name='Section'
              data={["2020/2021", "2022/2024", "2024/2025"]}
              className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
            />
            <DropDown
              // divClassName="flex flex-col xs:w-[30%]"
              labelText='Batch:'
              id='dropDown'
              setSelectOption={(e: any, i: any) => setbatch(i)}
              name='Section'
              data={["A", "B"]}
              className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
            />

            <DropDown
              // divClassName="flex flex-col xs:w-[30%]"
              labelText='Student type:'
              id='dropDown'
              setSelectOption={(e: any, i: any) => {
                settype(i);
              }}
              name='Section'
              data={["MSC", "PGD","PHD"]}
              className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
            />
          </div>
          {/* DropDown Menu */}
          <div className='w-full mb-56'>
            <DropDownMenu
              setData={setselect}
              label='Assign Internal Discussant'
              className=''
            />
          </div>
          {/* Lecturer Display Panel */}
          <button
            onClick={() => {
              if (!select) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Please Select a lecturer first",
                });
              } else {
                submit();
              }
            }}
            className='group flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]'>
            {" "}
            <span className='text-base text-white'>Assign</span>
          </button>
          {/* Date Picker */}
        </div>
      </div>
    </div>
  );
}
