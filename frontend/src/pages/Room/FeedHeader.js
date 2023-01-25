import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomActions } from "../../store/roomSlice";
const FeedHeader = (props) => {
  const dispatch = useDispatch();
  const selector = useRef();
  const activate = (event, val) => {
    const bgColor = "bg-blue-80";
    const elems = selector.current.getElementsByClassName("status");
    Array.from(elems).forEach((elem) => {
      elem.classList.remove(bgColor);
    });
    event.target.parentElement.children[1].classList.add(bgColor);
    dispatch(roomActions.feedTypeChanged({ feedType: val }));
  };
  return (
    <>
      <div className={"w-fit m-auto mt-5 " + (props.sticky ? "sticky" : "")}>
        <div className="flex bg-[#8b8b8d33] rounded-[100px]" ref={selector}>
          <div
            className="min-w-[100px] mx-3 ml-5 hover:cursor-pointer"
            onClick={(event) => activate(event, "top")}
          >
            <div className="text-white-50 text-[28px] text-center">Top</div>
            <div className="status bg-blue-80 h-[8px]"></div>
          </div>
          <div
            className="min-w-[100px] mx-3 hover:cursor-pointer"
            onClick={(event) => activate(event, "latest")}
          >
            <div className="text-white-50 text-[28px] text-center">Latest</div>
            <div className="status h-[8px]"></div>
          </div>
          <div
            className="top min-w-[100px] mx-3 hover:cursor-pointer"
            onClick={(event) => activate(event, "people")}
          >
            <div className="text-white-50 text-[28px] text-center">People</div>
            <div className="status h-[8px]"></div>
          </div>
          <div
            className="top min-w-[100px] mx-3 hover:cursor-pointer"
            onClick={(event) => activate(event, "photos")}
          >
            <div className="text-white-50 text-[28px] text-center">Photos</div>
            <div className="status h-[8px]"></div>
          </div>
          <div
            className="top min-w-[100px] mx-3 mr-5 hover:cursor-pointer"
            onClick={(event) => activate(event, "videos")}
          >
            <div className="text-white-50 text-[28px] text-center">Videos</div>
            <div className="status h-[8px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedHeader;
