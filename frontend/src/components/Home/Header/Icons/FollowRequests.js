import React from "react";
import SingleFollow from "./SingleFollow";
import { AiOutlineLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../../../store/headerSlice";

const FollowRequests = () => {
  const dispatch = useDispatch();
  const followData = useSelector((state) => state.notification.followReq);
  const toggle = () => {
    dispatch(headerActions.toggleFollowRequests());
  };
  return (
    <div className="absolute top-[80px] right-[100px] max-h-[450px] h-fit z-[999] bg-gray-600 text-white-100 w-[350px] overflow-y-scroll p-5">
      <div className="flex items-center font-medium mb-3">
        <div
          className="cursor-pointer hover:text-blue-60"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineLeft />
        </div>
        <div className="ml-[80px]">Follow Requests</div>
      </div>
      <div className="w-full h-[1px] bg-gray-600"></div>
      {followData.requestList.map((item) => {
        return (
          <SingleFollow
            key={item.userId}
            name={item.name}
            profilePic={item.profilePic}
            userId={item.userId}
          />
        );
      })}
    </div>
  );
};

export default FollowRequests;
