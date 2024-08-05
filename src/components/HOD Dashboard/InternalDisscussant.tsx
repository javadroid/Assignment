import Navigation from "../Reusable-Code/Navigation";
import { MdOutlineNotificationsActive } from "react-icons/md";
import DropDownMenu from "../Reusable-Code/DropDownMenu";
import DatePickerCalander from "../Reusable-Code/DatePickerCalander";

export default function InternalDisscussant() {
  return (
    <div className="font-pop h-screen flex flex-row lg:overflow-hidden bg-gray-100">
      <div className="w-full text-black">
        <Navigation />
        <main className="w-full m-0 p-0 ">
          <div className="m-4">
            <div className="flex sm:flex-row justify-between items-center">
              <h1 className="font-semibold my-2 text-sm lg:text-lg">
                Assign Internal Discussants
              </h1>
              <MdOutlineNotificationsActive
                className="fill-[#726135] w-5 h-5 lg:w-6 lg:h-6 mr-4 cursor-pointer transform transition ease-linear hover:scale-110"
                to={"#"}
              />
            </div>
            <hr className="border-gray-400" />
          </div>
        </main>
        <div className="mx-10">
          {/* DropDown Menu */}
          <div className="w-full mb-56">
            <DropDownMenu label="Assign Internal Discussant" className="" />
          </div>
          {/* Lecturer Display Panel */}
          <div></div>
          {/* Date Picker */}
          <div>
            <DatePickerCalander />
          </div>
        </div>
      </div>
    </div>
  );
}
