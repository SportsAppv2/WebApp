import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLeft } from "react-icons/ai";
import { headerActions } from "../../../../store/headerSlice";
import RoomGroup from "./RoomGroup";

const RoomRequests = () => {
  const dispatch = useDispatch();
  const roomReqData = useSelector((state) => state.notification.roomReq);
  const toggle = () => {
    dispatch(headerActions.toggleRoomRequests());
  };
  return (
    <div className="absolute top-[80px] right-[100px] bg-[#1b1a1a] rounded-2xl max-h-[450px] h-fit z-[999] text-white-100 w-[350px] overflow-y-scroll p-5">
      <div className="flex items-center font-medium mb-3">
        <div
          className="cursor-pointer hover:text-blue-60"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineLeft />
        </div>
        <div className="ml-[80px] flex items-center">
          Room Requests{" "}
          <div className="rounded-full bg-green-60 w-[20px] h-[20px] flex items-center justify-center ml-3">
            {roomReqData.totalCount}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-600 mb-4"></div>
      {console.log("Requested room data is ", roomReqData)}
      {roomReqData.requestList.map((item) => {
        return (
          <RoomGroup
            key={item.roomId + "room"}
            name={item.roomName}
            reqCount={item.reqCount}
            roomId={item.roomId}
            users={item.users}
          />
        );
      })}
    </div>
  );
};

export default RoomRequests;
