import React from "react";
import SingleRoomRequest from "./SingleRoomRequest";

const RoomGroup = (props) => {
  return (
    <div className="border-gray-600 border-[1px] p-1 my-2">
      <div className="flex justify-between">
        <div className="font-medium">{props.name}</div>
        <div className="rounded-full bg-green-60 w-[20px] h-[20px] flex items-center justify-center ml-3">
          {props.reqCount}
        </div>
      </div>
      {props.users.map((item) => {
        console.log(item.userId + props.roomId);
        return (
          <SingleRoomRequest
            key={item.userId + props.roomId}
            name={item.name}
            userName={item.userName}
            profilePic={item.profilePic}
            userId={item.userId}
            roomId={props.roomId}
          />
        );
      })}
      <div className="text-blue-100 hover:underline cursor-pointer">
        view more...
      </div>
    </div>
  );
};

export default RoomGroup;
