import React, { useRef } from "react";
import { useSelector } from "react-redux";

const FeedHeader = () => {
  const selector = useRef();
  const activate = (event) => {
    const color = "bg-[#5D5FEF]";
    const elems = selector.current.getElementsByClassName("status");
    Array.from(elems).forEach((elem) => {
      elem.classList.remove(color);
    });
    event.target.parentElement.children[1].classList.add(color);
  };

  return (
    <div className="flex justify-center mt-8">
      <div
        className="bar flex bg-[#1b1a1a] rounded-[100px]"
        ref={selector}
      >
        <div
          className="min-w-[80px] mx-7  hover:cursor-pointer"
          onClick={(e) => activate(e)}
        >
          <div className="text-white-100 text-center mt-2 text-[22px]">
            Posts
          </div>
          <div className="status bg-[#5D5FEF] mt-1 h-[4px]"></div>
        </div>
        <div
          className="min-w-[80px] mx-7 hover:cursor-pointer"
          onClick={(e) => activate(e)}
        >
          <div className="text-white-100 text-center mt-2 text-[22px]">
            Comments
          </div>
          <div className="status  mt-1 h-[4px]"></div>
        </div>
        <div
          className="min-w-[80px] mx-7 hover:cursor-pointer"
          onClick={(e) => activate(e)}
        >
          <div className="text-white-100 text-center mt-2 text-[22px]">
            Media
          </div>
          <div className="status  mt-1 h-[4px]"></div>
        </div>
        <div
          className="min-w-[80px] mx-7 hover:cursor-pointer"
          onClick={(e) => activate(e)}
        >
          <div className="text-white-100 text-center mt-2 text-[22px]">
            Recent Activity
          </div>
          <div className="status  mt-1 h-[4px]"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
