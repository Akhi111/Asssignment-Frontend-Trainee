import { AiOutlineMore } from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";
import { GoClock } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 py-3 px-6 border-b border-gray-300">
      <div className="text-lg font-bold text-gray-900">CNAPP Dashboard</div>
      <div className="flex items-center">
        <button className="mr-4 py-2 px-4 text-sm rounded bg-white border border-gray-300 hover:bg-gray-50">
          Add Widget +
        </button>
        <button className="mr-4 p-2 text-lg bg-white border border-gray-300 rounded hover:bg-gray-50">
          <span>
            <HiOutlineRefresh />
          </span>
        </button>
        <button className="mr-4 p-2 text-lg bg-white border border-gray-300 rounded hover:bg-gray-50">
          <span>
            <AiOutlineMore />
          </span>
        </button>
        <div className="flex items-center py-2 px-4 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
          <span className=" mr-2">
            <GoClock color=" blue" />
          </span>
          Last 2 days
          <span className="ml-2">
            <MdArrowDropDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;