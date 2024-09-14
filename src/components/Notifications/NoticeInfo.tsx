import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../service";

import { smpleData } from "./sampleData";
import Navigation from "../Reusable-Code/Navigation";

interface Notification {
  _id: any;
  type: string;
  message: string;
  timestamp: string;
}

function NoticeInfo() {
  const [notification, setNotification] = useState<Notification[]>([]);

  useEffect(() => {
    getNotification();
  }, []);

  const getNotification = async () => {
    try {
      const data = await axios.get(`${BaseUrl}api/v1/user/notification`);
      console.log(data.data);
      setNotification(data.data);
    } catch (error) {
      console.log(`Error fetching notification`, error);
    }
  };

  return (
    <div className='overflow-auto h-screen font-pop'>
      {/* navigation */}
      <Navigation />
      {/* container */}
      {/* back to home */}
      <div className='flex justify-end'>
        <div className='w-10 border-b-2 mx-[10%] my-7 flex justify-center'>
          <a href='/'>Back</a>
        </div>
      </div>
      {/* Notification div */}
      <div className='mx-5'>
        {smpleData.length > 0 ? (
          smpleData.map((notificationDatas: any, _id: any) => (
            <section
              key={notificationDatas._id}
              className='flex flex-row  border-2 p-4 pr-5 mb-5'>
              <div id={notificationDatas._id} className=''>
                <h2 className='font-bold'>{notificationDatas.type}</h2>
                <p>{notificationDatas.message}</p>
                <span>{notificationDatas.timestamp}</span>
              </div>
            </section>
          ))
        ) : (
          <p>No notification found</p>
        )}
      </div>
    </div>
  );
}

export default NoticeInfo;
