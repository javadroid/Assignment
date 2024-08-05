import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

interface props {
  isOpen: boolean;
  isClose: () => void;
}

const SideDesign: React.FC<props> = ({ isOpen, isClose }) => {
  return (
    <div
      className={`fixed top-0 left-0  h-screen bg-[#57430e] xs:w-[15%]  transition-transform duration-300 ease-linear ${
        isOpen ? "translate-x-0 z-30" : "-translate-x-full"
      } text-slate-100 xs:text-[7px] lg:text-[15px] `}
    >
      <div className="absolute top-4 right-4 cursor-pointer">
        <IoClose size={20} onClick={isClose} />
      </div>
      <ul className="flex flex-col text-center gap-y-28 h-full justify-center ">
        <li className="group flex  rounded-md h-[4rem] cursor-pointer hover:bg-[#f6dd9e] ">
          <Link
            className="group-hover:text-gray-950  group-hover:scale-110 transition-transform ease-linear  flex flex-col text-center m-auto"
            to={"/dash"}
          >
            Dashboard
          </Link>
        </li>
        <li className="group flex  rounded-md h-[4rem] cursor-pointer hover:bg-[#f6dd9e]">
          <Link
            className="group-hover:text-gray-950 group-hover:scale-110 transition-transform ease-linear  flex flex-col text-center m-auto"
            to={"/proposal"}
          >
            Proposal
          </Link>
        </li>
        <li className="group flex  rounded-md h-[4rem] cursor-pointer hover:bg-[#f6dd9e]">
          <Link
            className="group-hover:text-gray-950 group-hover:scale-110 transition-transform ease-linear  flex flex-col text-center m-auto"
            to={"/dash"}
          >
            Dashboard
          </Link>
        </li>
        <li className="group flex  rounded-md h-[4rem] cursor-pointer hover:bg-[#f6dd9e]">
          <Link
            className="group-hover:text-gray-950 group-hover:scale-110 transition-transform ease-linear  flex flex-col text-center m-auto"
            to={"/dash"}
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDesign;
