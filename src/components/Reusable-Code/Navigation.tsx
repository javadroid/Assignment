import { FaBars, FaPowerOff } from "react-icons/fa6";
import { MdCircle } from "react-icons/md";
import DateDisplay from "../Functions/DateDisplay";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import LogoutScreen from "../Student-Dashboard/Popup-Screens/LogoutScreen";

interface props {
  sildeBarClick: () => void;
}

const Navigation: React.FC<props> = ({ sildeBarClick }) => {
  const [logOutPopup, setLogoutPopup] = useState(false);
  const [extendSideBar, setExtendSideBar] = useState(true);
  const closeUp = () => {
    setLogoutPopup(!logOutPopup);
  };

  const sildeBar = () => {
    setExtendSideBar(!extendSideBar);
  };

  return (
    <nav className="p-[1rem] w-full flex flex-row justify-between border-b-2 border-b-gray-300 shadow-md">
      <div className="" onClick={sildeBarClick}>
        {extendSideBar ? (
          <div className="relative cursor-pointer" onClick={sildeBar}>
            <FaBars size={20} />
            <MdCircle size={9} className="absolute right-0 top-0" />
          </div>
        ) : (
          <div className="cursor-pointer" onClick={sildeBar}>
            <IoClose size={20} />
          </div>
        )}
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
