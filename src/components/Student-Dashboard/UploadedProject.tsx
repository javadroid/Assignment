import Navigation from "../Reusable-Code/Navigation";
import SideDesign from "../Reusable-Code/SideDesign";

function UploadedProject() {
  return (
    <div className="h-screen flex flex-row">
      <SideDesign />
      <div className="w-full">
        <Navigation />
      </div>
    </div>
  );
}

export default UploadedProject;
