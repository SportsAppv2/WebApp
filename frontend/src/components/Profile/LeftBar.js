import React from "react";
import { BsCircleFill } from "react-icons/bs";
const LeftBar = () => {
  return (
    <div className="w-[12%] sticky left-0 top-0">
      <div className="">
        <div className="score md:block lg:flex items-center p-5 relative">
          <div className="score h-[40px] w-[40px] rounded-full bg-[yellow] flex justify-center items-center">
            67
          </div>
          <div className="text-white-100 text-[16px] md:ml-0 md:mt-2 lg:ml-3">
            Profile Score
          </div>
        </div>
        <div className="menu text-white-100 text-[18px]">
          <div className="p-4 border-gray-600 border-2 bg-[#8B8B8D]/30 cursor-pointer">
            User Profile
          </div>
          <div className="p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer">
            My Interests
          </div>
          <div className="p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer">
            My Orders
          </div>
          <div className="p-4 border-gray-600 border-2 hover:bg-[#8B8B8D]/30 cursor-pointer">
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
