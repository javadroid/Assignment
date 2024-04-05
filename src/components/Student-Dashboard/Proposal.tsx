import React from "react";
import SideDesign from "../Reusable-Code/SideDesign";
import Navigation from "../Reusable-Code/Navigation";

const Proposal = () => {
  return (
    <div className="h-screen flex flex-row">
      <SideDesign />
      <div className="w-full">
        <Navigation />
        <div>
          <h1>Project Proposal</h1>
          <hr />
          <div>
            <main>
              <h2>Comments:</h2>
              <button>Project PDF ICON </button>
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
            <div>
              <div>icon right icon left</div>
              <button>Update PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
