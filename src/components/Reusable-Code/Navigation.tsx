import { FaBars, FaPowerOff } from "react-icons/fa6";
import { MdCircle } from "react-icons/md";
import DateDisplay from "../Functions/DateDisplay";

function Navigation() {
  return (
    <nav className="p-[1rem] w-full flex flex-row justify-between border-b-2 border-b-gray-300 shadow-md">
      <div className="relative">
        <FaBars size={20} />
        <MdCircle size={9} className="absolute right-0 top-0" />
      </div>
      <div className="flex justify-center ">
        <DateDisplay />
        <FaPowerOff size={20} style={{ color: "#ef1616" }} />
      </div>
    </nav>
  );
}

export default Navigation;
