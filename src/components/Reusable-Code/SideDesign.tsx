import { Link } from "react-router-dom";

const SideDesign = () => {
  return (
    <div className="h-screen bg-[#57430e] xs:w-[17%]  transition-transform ease-in-out text-slate-100 xs:text-[10px] lg:text-[20px]">
      <ul className="flex flex-col text-center  h-full justify-center ">
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
