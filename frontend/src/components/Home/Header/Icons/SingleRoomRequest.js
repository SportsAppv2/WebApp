import React from "react";
import { RxCheck, RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  fetchAcceptRoomJoin,
  fetchRejectRoomJoin,
} from "../../../../store/notificationSlice";

const SingleRoomRequest = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="my-4 shadow-2xl bg-gray-600 bg-opacity-20 p-2 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="rounded-full h-[40px] w-[40px]">
          <img
            src={
              props.profilePic
                ? props.profilePic
                : "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            }
            alt="dp"
            className="rounded-full object-cover"
          />
        </div>
        <div className="mx-1 ml-3">
          <div className="font-medium">
            <span className="mr-[2px]">{props.name.firstName}</span>{" "}
            <span>{props.name.lastName}</span>
          </div>
          <div className="text-sm italic">
            <span>{props.userName}</span>
          </div>
        </div>
        <div className="flex items-center text-[24px] text-[#000000]">
          <RxCheck
            className="mr-2 bg-[#09ac09] rounded-full p-1 cursor-pointer"
            onClick={() => {
              dispatch(
                fetchAcceptRoomJoin({
                  roomId: props.roomId,
                  pendingUserId: props.userId,
                })
              );
            }}
          />
          <RxCross2
            className="bg-[#c22f2f] rounded-full p-1 cursor-pointer"
            onClick={() => {
              dispatch(
                fetchRejectRoomJoin({
                  roomId: props.roomId,
                  pendingUserId: props.userId,
                })
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleRoomRequest;
