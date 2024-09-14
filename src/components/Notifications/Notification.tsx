import React, { useEffect, useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Notification() {
  const navigate = useNavigate();

  const [notificatonHandler, setNotificatonHandler] = useState(false);

  return (
    <>
      <MdOutlineNotificationsActive
        className='fill-[#726135] w-5 h-5 lg:w-6 lg:h-6 mr-4 cursor-pointer transform transition ease-linear hover:scale-110'
        onClick={() => {
          setNotificatonHandler(true);
          navigate("/notification");
        }}
      />
    </>
  );
}

export default Notification;
