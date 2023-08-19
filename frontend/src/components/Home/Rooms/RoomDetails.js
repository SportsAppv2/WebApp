import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPeopleFill } from "react-icons/bs";
import { fetchJoinRoom, roomActions } from "../../../store/roomSlice";
import { useNavigate } from "react-router-dom";

const RoomDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roomData = useSelector((state) => state.room);
  const searchedRoomData = useSelector((state) => state.room.searchedRoom);
  return (
    <div>
      <div className="h-fit w-[580px] text-gray-100 m-auto mt-[80px] rounded-3xl relative p-5">
        <div className="container px-5">
          <div className="roomName text-[24px] font-medium flex justify-center">
            {searchedRoomData.roomName}
          </div>
          <div className="roomBio text-gray-400 mt-2">
            {searchedRoomData.roomSummary}
          </div>
          <div className="flex justify-between my-1">
            <div className="owner text-gray-400">
              <span>Owner: </span>
              <span>Owner Name</span>
            </div>
            <div className="italic text-blue-60 text-[14px] flex justify-end">
              {searchedRoomData.isPrivate ? "Private room" : "Public room"}
            </div>
          </div>
          <div></div>
          <div className="otherStats flex justify-between my-6">
            <div className="flex flex-wrap">
              {searchedRoomData.sports.map((item) => {
                return (
                  <div className="bg-gray-600 font-medium p-1 px-4 mb-1 rounded-lg text-[14px] mx-1">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="memberCount flex items-center text-[18px] flex-shrink-0 w-[50px]">
              <BsFillPeopleFill className="text-blue-60 text-[24px]" />
              <span className="mx-2 font-medium">
                {searchedRoomData.userCount}
              </span>
            </div>
          </div>
        </div>
        <div className="footer text-center my-5">
          <button
            className="px-3 py-1 text-lg w-[140px]  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl mr-8"
            onClick={() => {
              dispatch(fetchJoinRoom());
            }}
          >
            Join
          </button>
          {roomData.roomNotJoined ? (
            <button
              className=" bg-[#c34747] px-3 py-1 text-lg w-[140px] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl mr-8"
              onClick={() => {
                dispatch(roomActions.toggleRoomNotFound(false));
                navigate("/home");
              }}
            >
              Return Home
            </button>
          ) : (
            <button
              className="px-3 py-1 text-lg w-[100px] bg-[#f31b1b] bg-opacity-50 hover:bg-[#f00d0d] text-gray-200  shadow-md rounded-xl"
              onClick={() => {
                dispatch(roomActions.toogleSearchedRoomModal());
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
