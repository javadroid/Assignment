import React, { useState } from "react";
import Navigation from "../Reusable-Code/Navigation";
import { Link } from "react-router-dom";
// import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Avatar from "@mui/material/Avatar";
import CheckBox from "../Reusable-Code/CheckBox";
import { commentsDataATH, uploadDataATH } from "../../Utilities/Data";

const Proposal = () => {
  const [, setCheckedBox] = React.useState(false);
  const [commentsData, setcommentsData] = useState(commentsDataATH);
  const filteredTopics = uploadDataATH.filter((topic) => topic.button);

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
    <div className="font-pop scroll-smooth flex flex-row overflow-auto">
      <div className="w-full text-black">
        <Navigation />
        <div className="pt-3 px-10 bg-[#F6F6F6] h-screen">
          <h1 className="font-semibold text-sm lg:text-lg">Project Proposal</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-col pt-4">
            <main className="flex flex-row items-end justify-between w-full">
              <h2 className="text-sm lg:text-base">Comments:</h2>
              {filteredTopics.map((upLoadedTopicS, i) => (
                <div
                  key={i}
                  className="bg-[#FAEDCB] shadow p-4 text-right w-2/3 text-xs lg:text-base lg:w-1/2"
                >
                  <h2 className="uppercase font-semibold pb-2" id={String(i)}>
                    {upLoadedTopicS.mainTopic}
                  </h2>
                  <Link to={"#"} className="text-[#57430E] font-medium">
                    Click to view project pdf
                  </Link>
                </div>
              ))}
            </main>
            <div className="bg-white mt-4 flex flex-col p-6 overflow-y-auto lg:w-[100%] h-[24rem]">
              {commentsData.map((commentData, i) => {
                return (
                  <section key={i} className="border p-5 text-gray-700 mb-4">
                    <div className="flex flex-row justify-between mb-4">
                      <div className="flex flex-row items-center">
                        <Avatar
                          alt=""
                          src={commentData.image}
                          sx={{
                            width: { sm: 23, lg: 56 },
                            height: { sm: 23, lg: 56 },
                          }}
                          className="mr-3"
                        />
                        <div className="flex flex-col ">
                          <h3 className="font-semibold text-base lg:text-lg">
                            {commentData.name}
                            <span className="bold text-sm lg:text-base text-black">
                              ({commentData.type})
                            </span>
                          </h3>
                          <p className="text-xs lg:text-base pl-6">
                            {commentData.date}
                          </p>
                        </div>
                      </div>
                      <CheckBox
                        value={commentData.status}
                        onChange={(e) => handleChange(e, i)}
                        id={String(i)}
                      />
                    </div>
                    <p className="px-4">{commentData.comment}</p>
                  </section>
                );
              })}
              {/* <div className="flex flex-row justify-end mt-2">
                <BiSolidLeftArrow className="mr-4 text-xl text-[#B5B5B5]" />
                <BiSolidRightArrow className="ml-4 text-xl text-[#B5B5B5]" />
              </div> */}
            </div>
            <div className="flex flex-col items-end mt-4">
              <button className="transform transition ease-linear hover:scale-110 bg-[#A89D82] text-black p-3 text-lg mr-4 rounded-md hover:bg-[#bebcb6]">
                Update PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
