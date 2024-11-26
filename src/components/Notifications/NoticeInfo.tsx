import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../service";
import Navigation from "../Reusable-Code/Navigation";
import { Link } from "react-router-dom";

interface Notification {
  _id: any;
  type: string;
  viewid:string,
  message: string;
  timestamp: string;
  read: boolean;
}

function NoticeInfo() {
  const [notification, setNotification] = useState<Notification[]>([]);
  const [unReadCount, setUnReadCount] = useState<number>(0);

  useEffect(() => {
    getNotification();
  }, []);

  const getNotification = async () => {
    try {
      const { data } = await axios.get(
        `${BaseUrl}user/notification/` +
          JSON.parse(localStorage.getItem("userdata")!).user_data._id
      );
      // console.log(data.data);
      // setNotification(data.data);

      const updatedNotifications = data.map(
        (notificationDatas: Notification) => ({
          ...notificationDatas,
          read: false,
        })
      );
      setNotification(updatedNotifications);
      setUnReadCount(updatedNotifications.length);
    } catch (error) {
      console.log(`Error fetching notification`, error);
    }
  };

  const markAsRead = (id: any) => {
    const updatedNotifications = notification.map((notificationDatas) =>
      notificationDatas._id === id
        ? { ...notificationDatas, read: true }
        : notificationDatas
    );

    setNotification(updatedNotifications);

    const newUnReadCount = updatedNotifications.filter(
      (notificationDatas) => !notificationDatas.read
    ).length;
    setUnReadCount(newUnReadCount);
  };

  return (
    <div className='overflow-hidden h-full font-pop '>
      {/* navigation */}
      <Navigation />
      {/* container */}
      {/* back to home */}
      <div className='mx-5 my-2'>
        <h1 className='text-black font-medium text-2xl py-2'>Notification</h1>
        <hr className='border-black' />
      </div>
      <div className='mx-24 my-5 bg-[#F6DD9E]'>
        <h2 className='font-bold text-amber-950 py-5 px-2'>
          INBOX {unReadCount > 0 && <span>({unReadCount})</span>}
        </h2>
      </div>
      {/* Notification div */}
      <div className=' overflow-hidden my-5'>
        <div className='mx-20 h-[400px] overflow-auto'>
          {notification.length > 0 ? (
            notification.map((notificationDatas) => (
              <section
                key={notificationDatas._id}
                className={`flex flex-row justify-between border-2 p-4 pr-5 mb-5 mx-4 ${
                  notificationDatas.read ? "bg-gray-200" : ""
                }`}>
                <div id={notificationDatas._id} className=''>
                  <h2 className='font-bold'>{notificationDatas.type}</h2>
                  <p>{notificationDatas.message}</p>
                  <span>{notificationDatas.timestamp}</span>
                </div>

                <Link
                  to={"/student-projects/" + notificationDatas.viewid}
                  onClick={() => markAsRead(notificationDatas._id)}>
                  {"View"}
                </Link>
              </section>
            ))
          ) : (
            <div className='flex m-auto'>
              <p>No notification found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoticeInfo;
