import React from "react";
import SideDesign from "../Reusable-Code/SideDesign";
import Navigation from "../Reusable-Code/Navigation";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-row">
      <SideDesign />
      <div className="w-full">
        <Navigation />
        <div className="">
          <section>
            <h1>Project Proposal</h1>
            <hr />
            <div>
              <button>Ongoing</button>
            </div>
          </section>
          <section>
            <h1>Internal Defense</h1>
            <hr />
            <div>
              <button>Inactive</button>
            </div>
          </section>
          <section>
            <h1>External Defense</h1>
            <hr />
            <div>
              <button>Inactive</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
