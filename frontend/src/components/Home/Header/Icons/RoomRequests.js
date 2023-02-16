import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineLeft } from "react-icons/ai";
import { headerActions } from "../../../../store/headerSlice";
import RoomGroup from "./RoomGroup";

const RoomRequests = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(headerActions.toggleRoomRequests());
  };
  return (
    <div className="absolute top-[80px] right-[100px] bg-gray-600 max-h-[450px] h-fit z-[999] text-white-100 w-[350px] overflow-y-scroll p-5">
      <div className="flex items-center font-medium mb-3">
        <div
          className="cursor-pointer hover:text-blue-60"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineLeft />
        </div>
        <div className="ml-[80px]">Room Requests</div>
      </div>
      <div className="w-full h-[1px] bg-gray-600 mb-4"></div>
      <RoomGroup name="NITS Sports" />
      <RoomGroup name="Sex Club" />
    </div>
  );
};

export default RoomRequests;
