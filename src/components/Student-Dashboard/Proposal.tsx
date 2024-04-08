import React from "react";
import SideDesign from "../Reusable-Code/SideDesign";
import Navigation from "../Reusable-Code/Navigation";
import { Link } from "react-router-dom";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Proposal = () => {
  return (
    <div className="component flex flex-row">
      <SideDesign />
      <div className="w-full h-screen text-black">
        <Navigation />
        <div className="pt-8 px-10">
          <h1 className="font-semibold text-lg">Project Proposal</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-col pt-4">
            <main className="flex flex-row items-end justify-between w-full">
              <h2>Comments:</h2>
              <div>
                <h2>Web Based Civil Service Performance Evaluation System</h2>
                <Link to={"#"}>Click to view project pdf</Link>
              </div>
            </main>
            <section>
              <div>
                <div>
                  <div>Profile image</div>
                  <h3>Dr. Joseph Akangi (HOD)</h3>
                </div>
                <p>34 minutes ago</p>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam voluptates ipsa voluptatibus explicabo amet! Inventore
                minus fuga, labore quas ducimus libero itaque saepe pariatur?
                Reprehenderit exercitationem atque illo amet aut!
              </p>
              <button></button>
            </section>
            <section>
              <div>
                <div>
                  <div>Profile image</div>
                  <h3>Prof. David Moses (DEAN)</h3>
                </div>
                <p>2 hours ago</p>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam voluptates ipsa voluptatibus explicabo amet! Inventore
                minus fuga, labore quas ducimus libero itaque saepe pariatur?
                Reprehenderit exercitationem atque illo amet aut!
              </p>
              <button></button>
            </section>
            <section>
              <div>
                <div>
                  <div>Profile image</div>
                  <h3>Mr. Abdul Sani (PG Coordinator)</h3>
                </div>
                <p>4 hours ago</p>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam voluptates ipsa voluptatibus explicabo amet! Inventore
                minus fuga, labore quas ducimus libero itaque saepe pariatur?
                Reprehenderit exercitationem atque illo amet aut!
              </p>
              <button></button>
            </section>
            <div className="flex flex-col items-end">
              <div className="flex flex-row justify-between">
                <BiSolidLeftArrow />
                <BiSolidRightArrow />
              </div>
              <button>Update PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
