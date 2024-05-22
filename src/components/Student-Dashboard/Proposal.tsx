import React from "react";
import SideDesign from "../Reusable-Code/SideDesign";
import Navigation from "../Reusable-Code/Navigation";
import { Link } from "react-router-dom";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Avatar from "@mui/material/Avatar";
import CheckBox from "../Reusable-Code/CheckBox";

const Proposal = () => {
  const [checkedBox, setCheckedBox] = React.useState(false);
  const [checkedbox2, setCheckedBox2] = React.useState(false);
  const [checkedbox3, setCheckedBox3] = React.useState(false);

  const handleChange = (newValue: boolean) => {
    setCheckedBox(newValue);
  };
  const handleChange2 = (newValue: boolean) => {
    setCheckedBox2(newValue);
  };
  const handleChange3 = (newValue: boolean) => {
    setCheckedBox3(newValue);
  };

  return (
    <div className="font-pop flex flex-row">
      <SideDesign />
      <div className="w-full text-black">
        <Navigation />
        <div className="pt-3 px-10 bg-[#F6F6F6] h-screen">
          <h1 className="font-semibold text-lg">Project Proposal</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-col pt-4">
            <main className="flex flex-row items-end justify-between w-full">
              <h2>Comments:</h2>
              <div className="bg-[#FAEDCB] shadow p-4 text-right">
                <h2 className="uppercase font-semibold pb-2">
                  Web Based Civil Service Performance Evaluation System
                </h2>
                <Link to={"#"} className="text-[#57430E] font-medium">
                  Click to view project pdf
                </Link>
              </div>
            </main>
            <div className="bg-white mt-4 flex flex-col p-6 overflow-y-auto h-[24rem]">
              <section className="border p-5 text-gray-700 mb-4">
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex flex-row items-center">
                    <Avatar
                      alt="Dr. Joseph Akangi"
                      src=""
                      sx={{ width: 56, height: 56 }}
                      className="mr-3"
                    />
                    <div className="flex flex-col ">
                      <h3 className="font-semibold text-lg">
                        Dr. Joseph Akangi{" "}
                        <span className="bold text-black">(HOD)</span>
                      </h3>
                      <p className="text-sm pl-6">22nd March 2024</p>
                    </div>
                  </div>
                  <CheckBox value={checkedBox} onChange={handleChange} id="1" />
                </div>
                <p className="px-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam voluptates ipsa voluptatibus explicabo amet! Inventore
                  minus fuga, labore quas ducimus libero itaque saepe pariatur?
                  Reprehenderit exercitationem atque illo amet aut!
                </p>
              </section>
              <section className="border p-5 text-gray-700 mt-2 mb-4">
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex flex-row items-center">
                    <Avatar
                      alt="Dr. Joseph Akangi"
                      src=""
                      sx={{ width: 56, height: 56 }}
                      className="mr-3"
                    />
                    <div className="flex flex-col ">
                      <h3 className="font-semibold text-lg">
                        Dr. Joseph Akangi{" "}
                        <span className="bold text-black">(HOD)</span>
                      </h3>
                      <p className="text-sm pl-6">22nd March 2024</p>
                    </div>
                  </div>
                  <CheckBox
                    value={checkedbox2}
                    onChange={handleChange2}
                    id="2"
                  />
                </div>
                <p className="px-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam voluptates ipsa voluptatibus explicabo amet! Inventore
                  minus fuga, labore quas ducimus libero itaque saepe pariatur?
                  Reprehenderit exercitationem atque illo amet aut!
                </p>
              </section>
              <section className="border p-5 text-gray-700 mt-2 mb-4">
                <div className="flex flex-row justify-between mb-4">
                  <div className="flex flex-row items-center">
                    <Avatar
                      alt="Dr. Joseph Akangi"
                      src=""
                      sx={{ width: 56, height: 56 }}
                      className="mr-3"
                    />
                    <div className="flex flex-col ">
                      <h3 className="font-semibold text-lg">
                        Dr. Joseph Akangi{" "}
                        <span className="bold text-black">(HOD)</span>
                      </h3>
                      <p className="text-sm pl-6">22nd March 2024</p>
                    </div>
                  </div>
                  <CheckBox
                    value={checkedbox3}
                    onChange={handleChange3}
                    id="3"
                  />
                  {/* <button className="bg-none w-6 h-6 border border-solid rounded-full border-[#EDBE44]"></button> */}
                </div>
                <p className="px-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam voluptates ipsa voluptatibus explicabo amet! Inventore
                  minus fuga, labore quas ducimus libero itaque saepe pariatur?
                  Reprehenderit exercitationem atque illo amet aut!
                </p>
              </section>
              <div className="flex flex-row justify-end mt-2">
                <BiSolidLeftArrow className="mr-4 text-xl text-[#B5B5B5]" />
                <BiSolidRightArrow className="ml-4 text-xl text-[#B5B5B5]" />
              </div>
            </div>
            <div className="flex flex-col items-end mt-4">
              <button className="transform transition hover:scale-110 bg-[#A89D82] text-black p-3 text-lg mr-4 rounded-md hover:bg-[#bebcb6]">
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
