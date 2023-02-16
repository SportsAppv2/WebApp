import React, { useEffect, useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import LikedPost from "./LikedPost";
import CommentedPost from "./CommentedPost";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../../../store/headerSlice";
import FollowRequests from "./FollowRequests";
import RoomRequests from "./RoomRequests";
import { fetchFollowReq } from "../../../../store/notificationSlice";

const Notifications = () => {
  const data = useSelector((state) => state.header);
  const notificationData = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const notif = useRef("");
  useEffect(() => {
    dispatch(fetchFollowReq());
  }, []);
  if (data.showFollowRequests == false && notif.current) {
    notif.current.classList.remove("hidden");
  }
  return (
    <div>
      <div
        className="absolute top-[80px] right-[100px] max-h-[450px] h-fit bg-gray-600 z-[999] text-white-100 w-[350px] overflow-y-scroll p-5"
        ref={notif}
      >
        <div
          className="flex items-center p-2 px-5 shadow-3xl bg-blue-60 bg-opacity-30 hover:bg-blue-60 hover:bg-opacity-50 rounded-xl justify-between cursor-pointer"
          onClick={() => {
            dispatch(headerActions.toggleFollowRequests());
          }}
        >
          <div className="flex justify-between">
            <div>Follow requests</div>{" "}
            <div className="bg-[#ff623e] rounded-full h-[20px] w-[20px] flex justify-center items-center mx-3">
              {notificationData.followReq.count}
            </div>
          </div>
          <AiOutlineRight />
        </div>
        <div
          className="flex items-center mt-4 p-2 px-5 shadow-3xl bg-blue-60 bg-opacity-30 hover:bg-blue-60 hover:bg-opacity-50 rounded-xl justify-between cursor-pointer"
          onClick={() => {
            dispatch(headerActions.toggleRoomRequests());
          }}
        >
          <div>Room requests</div>
          <AiOutlineRight />
        </div>
        <LikedPost />
        <CommentedPost />
      </div>
      {data.showFollowRequests && notif.current ? (
        <>
          {notif.current.classList.add("hidden")} <FollowRequests />{" "}
        </>
      ) : (
        ""
      )}
      {data.showRoomRequests && notif.current ? (
        <>
          {notif.current.classList.add("hidden")} <RoomRequests />{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notifications;
