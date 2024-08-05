import React, { useState } from "react";
import SideDesign from "../Reusable-Code/SideDesign";
import Navigation from "../Reusable-Code/Navigation";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const sildeBarClick = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="component flex flex-row">
      {showSideBar ? "" : <SideDesign />}
      <div className="w-full">
        <Navigation sildeBarClick={sildeBarClick} />
        <div className="flex flex-col  p-3 lg:pt-48 lg:px-14 lg:flex-row lg:justify-between">
          <section className="basis-1/3 m-4 bg-gradient-to-r from-[#EDBE44] from-1% to-[#8D7F5B] to-100%">
            <h1 className="text-black font-medium text-2xl py-2 text-center">
              Project Proposal
            </h1>
            <hr className="border-black" />
            <div className="p-12 flex justify-center">
              <Link to={"/uploaded"}>
                <button className="bg-white rounded-md px-14 py-2 uppercase text-[#A1812E] font-bold text-lg hover:bg-[#EDBE44] hover:text-[#ffffff]">
                  Ongoing
                </button>
              </Link>
            </div>
          </section>
          <section className="basis-1/3 m-4 bg-gradient-to-b from-[#F9E8BC] from-1% to-[#999999] to-100%">
            <h1 className="text-black font-medium text-2xl py-2 text-center">
              Internal Defense
            </h1>
            <hr className="border-black" />
            <div className="p-12 flex justify-center">
              <Link to={"#"}>
                <button className="bg-white rounded-md px-14 py-2 uppercase text-[#A1812E] font-bold text-lg">
                  Inactive
                </button>
              </Link>
            </div>
          </section>
          <section className="basis-1/3 m-4 bg-gradient-to-l from-[#A89D82] from-1% to-[#F3D380] to-100%">
            <h1 className="text-black font-medium text-2xl py-2 text-center">
              External Defense
            </h1>
            <hr className="border-black" />
            <div className="p-12 flex justify-center">
              <Link to={"#"}>
                <button className="bg-white rounded-md px-14 py-2 uppercase text-[#A1812E] font-bold text-lg">
                  Inactive
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
