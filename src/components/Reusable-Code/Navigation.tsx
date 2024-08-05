import { FaBars, FaPowerOff } from "react-icons/fa6";
import { MdCircle } from "react-icons/md";
import DateDisplay from "../Functions/DateDisplay";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import LogoutScreen from "../Student-Dashboard/Popup-Screens/LogoutScreen";
import SideDesign from "./SideDesign";

const Navigation = () => {
  const [logOutPopup, setLogoutPopup] = useState(false);
  const [extendSideBar, setExtendSideBar] = useState(false);
  const closeUp = () => {
    setLogoutPopup(!logOutPopup);
  };

  const toggleSidebar = () => {
    setExtendSideBar(!extendSideBar);
  };

  const closeSidebar = () => {
    setExtendSideBar(false);
  };

  return (
    <nav className="p-[1rem] w-full flex flex-row justify-between border-b-2 border-b-gray-300 shadow-md">
      <div className="">
        <div className="relative cursor-pointer" onClick={toggleSidebar}>
          <FaBars size={20} />
          <MdCircle size={9} className="absolute right-0 top-0" />
        </div>
        <SideDesign isOpen={extendSideBar} isClose={closeSidebar} />
      </div>
      <div className="flex justify-center ">
        <DateDisplay />
        <FaPowerOff
          onClick={closeUp}
          size={20}
          style={{ color: "#ef1616", cursor: "pointer" }}
        />
      </div>
      {logOutPopup && <LogoutScreen onClose={closeUp} />}
    </nav>
  );
};

export default Navigation;
