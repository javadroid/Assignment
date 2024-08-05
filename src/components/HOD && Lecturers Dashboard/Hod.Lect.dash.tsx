import React, { useEffect, useState } from "react";
import SideDesign from "../Reusable-Code/SideDesign";
import Navigation from "../Reusable-Code/Navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Avatar from "@mui/material/Avatar";
import CheckBox from "../Reusable-Code/CheckBox";
import { commentsDataATH, uploadDataATH } from "../../Utilities/Data";
import axios from "axios";
import { BaseUrl } from "../../service";

const Proposal = () => {
  const [, setCheckedBox] = React.useState(false);
  const [uploads, setuploads] = useState([]) as any[];
  const [commentsData, setcommentsData] = useState([]) as any[];
  const filteredTopics = uploadDataATH.filter((topic) => topic.button);
  const location = useLocation();
  const state = location.state;
  const nativate = useNavigate();
  useEffect(() => {
    if (!state) {
      nativate("/");
    }
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(`${BaseUrl}user/document/${state._id}`);
    const data1 = await axios.get(`${BaseUrl}user/comment/${state._id}`);
    setcommentsData(data1.data);
    console.log("document", data.data);
    console.log("comment", data1.data);
    setuploads(data.data);
  };
  const handleChange = (newValue: boolean, i: any) => {
    setCheckedBox(newValue);
    // Make a copy of the commentsData array
    const updatedCommentsData = [...commentsData];

    // Update the status of the comment at position 1
    updatedCommentsData[i].status = !updatedCommentsData[i].status; // Toggle status

    // Set the state with the updated array
    setcommentsData(updatedCommentsData);
  };

  return (
    <div className="font-pop h-screen flex flex-row overflow-hidden">
      <div className="w-full text-black">
        <Navigation />
        <div className="pt-3 px-10 bg-[#F6F6F6] h-screen">
          <h1 className="font-semibold text-sm lg:text-lg">Project Proposal</h1>
          <hr className="border-gray-400" />
          {uploads.map((upload: any, i: any) => {
            return (
              <div key={i} className="flex flex-col pt-4">
                <main className="flex flex-row items-end justify-between w-full">
                  <h2 className="text-sm lg:text-base">Comments:</h2>
                  <div className="bg-[#FAEDCB] shadow p-4 text-right w-2/3 text-xs lg:text-base lg:w-1/2">
                    {/* make sure to work on this for mutiple topics */}
                    <h2
                      className={`uppercase font-semibold pb-2`}
                      id={String(i)}
                    >
                      {state.name}
                    </h2>
                    <a
                      href={upload.url}
                      target="_blank"
                      className="text-[#57430E] font-medium"
                      rel="noreferrer"
                    >
                      Click to view project pdf
                    </a>
                  </div>
                </main>
                <div className="bg-white mt-4 flex flex-col p-6 overflow-y-auto lg:w-[100%] h-[24rem]">
                  {commentsData
                    .filter((cd: any) => cd.document_id === upload._id)
                    .map((commentData: any, i: any) => {
                      return (
                        <section
                          key={i}
                          className="border p-5 text-gray-700 mb-4"
                        >
                          <div className="flex flex-row justify-between mb-4">
                            <div className="flex flex-row items-center">
                              <Avatar
                                alt=""
                                src={commentData?.lecturer_id?.picture}
                                sx={{
                                  width: { sm: 23, lg: 56 },
                                  height: { sm: 23, lg: 56 },
                                }}
                                className="mr-3"
                              />
                              <div className="flex flex-col ">
                                <h3 className="font-semibold text-base lg:text-lg">
                                  {commentData?.lecturer_id?.fname}{" "}
                                  {commentData?.lecturer_id?.lname}
                                  <span className="bold text-sm lg:text-base text-black">
                                    ({commentData?.lecturer_id?.type})
                                  </span>
                                </h3>
                                <p className="text-xs lg:text-base pl-6">
                                  {new Date(
                                    commentData?.createdAt
                                  ).toDateString()}
                                </p>
                              </div>
                            </div>
                            <CheckBox
                              value={commentData?.status}
                              onChange={(e) => handleChange(e, i)}
                              id={String(i)}
                            />
                          </div>
                          <p className="px-4">{commentData?.comment}</p>
                        </section>
                      );
                    })}
                  {/* <div className="flex flex-row justify-end mt-2">
                <BiSolidLeftArrow className="mr-4 text-xl text-[#B5B5B5]" />
                <BiSolidRightArrow className="ml-4 text-xl text-[#B5B5B5]" />
              </div> */}
                </div>
              </div>
            );
          })}
          <div className="flex flex-col items-end mt-4">
            <button className="transform transition ease-linear hover:scale-110 bg-[#A89D82] text-black p-3 text-lg mr-10 rounded-md hover:bg-[#bebcb6]">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
