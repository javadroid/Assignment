import { FaBars, FaPowerOff } from "react-icons/fa6";

function Navigation() {
  return (
    <nav className="p-[1rem] w-full flex flex-row justify-between border-b-2 border-b-gray-300 shadow-md">
      <FaBars size={20} />
      <FaPowerOff size={20} style={{ color: "#ef1616" }} />
    </nav>
  );
}

export default Navigation;
