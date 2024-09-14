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
import UploadPopUp from "../Student-Dashboard/Popup-Screens/UploadPopUp";
import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";

const Proposal = () => {
  const [, setCheckedBox] = React.useState(false);
  const [uploads, setuploads] = useState([]) as any[];
  const [commentsData, setcommentsData] = useState([]) as any[];
  const filteredTopics = uploadDataATH.filter((topic) => topic.button);
  const [comment, setComment] = useState("");
  const [isStaff, setisStaff] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const state = location.state;
  const nativate = useNavigate();
  useEffect(() => {
    if (!state) {
      nativate("/");
    }

    getData();
  }, []);
  useEffect(() => {}, [isStaff]);

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
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const sendComment = () => {
    const upData = {
      document_id: uploads[uploads.length - 1]._id,
      project_id: state._id,
      lecturer_id: JSON.parse(localStorage.getItem("userdata")!).user_data._id,
      comment,
    };
    console.log(upData);
    axios.post(`${BaseUrl}user/comment`, upData).then(() => {
      setComment("");
      getData();
    });
  };

  return (
    <div className="font-pop h-screen flex flex-row overflow-hidden">
      <div className="w-full text-black flex  flex-col">
        <Navigation />
        <div className="pt-3 px-10 bg-[#F6F6F6]  h-screen relative">
          <h1 className="font-semibold text-sm lg:text-lg">Project Proposal</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-row justify-between">
            <ToggleButtonGroup
              color="primary"
              value={true}
              exclusive
              aria-label="Platform"
            >
              <ToggleButton
                onChange={(e) => {
                  setisStaff(!isStaff);
                }}
                value={isStaff}
              >
                View {!isStaff ? " all comments" : "only your comment"}
              </ToggleButton>
            </ToggleButtonGroup>
            {/* <InputField
              labelText="search:"
              id=""
              className="w-[40%] border-2 border-gray-500 py-1 px-2 mr-2 rounded-md lg:w-[25%] focus:active:border-gray-500"
              type="text"
              divClassName="flex flex-row gap-2 items-center justify-end"
            /> */}
            {/* <button
              onClick={() => {
                setIsPopupOpen(true);
              }}
              className="group flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]"
            >
              {" "}
              <span className="text-base text-white">Add</span>
            </button> */}
          </div>
          <div className="overflow-auto h-[70vh]">
            {uploads.map((upload: any, i: any) => {
              return (
                <div key={i} className="flex  flex-col pt-4  ">
                  <main className="flex flex-row items-end justify-between ">
                    {commentsData.filter(
                      (cd: any) => cd.document_id === upload._id
                    ).length > 0 ? (
                      <h2 className="text-sm lg:text-base">Comments:</h2>
                    ) : (
                      <div></div>
                    )}
                    <a
                      href={upload.url}
                      target="_blank"
                      className="bg-[#FAEDCB] shadow p-4  text-xs lg:text-base "
                    >
                      {/* make sure to work on this for mutiple topics */}
                      <h2
                        className={`uppercase font-semibold pb-2`}
                        id={String(i)}
                      >
                        {state.name}
                      </h2>
                      <span
                        // href={upload.url}
                        // target="_blank"
                        className="text-[#57430E] font-medium"
                        rel="noreferrer"
                      >
                        Click to view project pdf
                      </span>
                    </a>
                  </main>

                  {commentsData.filter(
                    (cd: any) => cd.document_id === upload._id
                  ).length > 0 && (
                    <div className="bg-white mt-4 flex flex-col p-6 overflow-y-auto lg:w-[70%] ">
                      {commentsData
                        .filter((cd: any) => cd.document_id === upload._id && (isStaff? cd.lecturer_id:cd.lecturer_id._id===JSON.parse(localStorage.getItem("userdata")!).user_data._id ))
                        .map((commentData: any, i: any) => {

                          return (
                            <section
                              key={i}
                              className="border p-3 text-gray-700 mb-2"
                            >
                              <div className="flex flex-row justify-between mb-2">
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
                                  <div className="flex flex-col justify-start items-start">
                                    <h3 className="font-semibold text-base lg:text-lg">
                                      {commentData?.lecturer_id?.fname}{" "}
                                      {commentData?.lecturer_id?.lname}
                                      <span className="bold text-sm lg:text-base text-black">
                                        ({commentData?.lecturer_id?.type})
                                      </span>
                                    </h3>
                                    <p className="text-xs lg:text-sm ">
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

                              <p className="px-8">{commentData?.comment}</p>
                            </section>
                          );
                        })}
                      {/* <div className="flex flex-row justify-end mt-2">
                <BiSolidLeftArrow className="mr-4 text-xl text-[#B5B5B5]" />
                <BiSolidRightArrow className="ml-4 text-xl text-[#B5B5B5]" />
              </div> */}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-end mt-4"></div>
          {state.status !== "rejected" && (
            <div className="z-4  flex flex-row absolute items-center mb-3 bottom-0 w-full ">
              <div className=" bg-white  mr-2 w-2/3 p-2">
                <TextField
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={() => {}}
                  variant="filled"
                  disabled={
                    JSON.parse(localStorage.getItem("userdata")!).user_data
                      .is_student
                  }
                  value={comment}
                  className="z-5  "
                  placeholder="Write a comment"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  fullWidth
                  margin="dense"
                  sx={{ mb: 1 }}
                />
              </div>

              {JSON.parse(localStorage.getItem("userdata")!).user_data
                .is_student ? (
                <div>
                  <button
                    onClick={togglePopup}
                    className="transform transition ease-linear hover:scale-110 bg-[#A89D82] text-black p-3 text-lg  rounded-md hover:bg-[#bebcb6]"
                  >
                    Update Document
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={sendComment}
                    className="transform mr-2 transition ease-linear hover:scale-110 bg-[#A89D82] text-black p-3 text-lg  rounded-md hover:bg-[#bebcb6]"
                  >
                    Send Comment
                  </button>
                  {/* <button
                    onClick={togglePopup}
                    className="transform transition ease-linear hover:scale-110 bg-[#A89D82] text-black p-3 text-lg  rounded-md hover:bg-[#bebcb6]"
                  >
                    Score Project Work
                  </button> */}
                </div>
              )}
            </div>
          )}
        </div>

        {isPopupOpen && (
          <UploadPopUp
            project_id={state._id}
            getData={getData}
            onClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Proposal;
