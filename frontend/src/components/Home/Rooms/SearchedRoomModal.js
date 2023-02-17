import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinRoom, roomActions } from "../../../store/roomSlice";

const SearchedRoomModal = () => {
  const dispatch = useDispatch();
  const searchedRoomData = useSelector((state) => state.room.searchedRoom);
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-10">
      <div
        className="w-screen h-screen fixed top-0 left-0 bg-gray-20"
        onClick={() => {
          dispatch(roomActions.toogleSearchedRoomModal());
        }}
      ></div>
      <div className="h-fit w-[580px] bg-[#000000] text-gray-100 m-auto mt-[80px] rounded-3xl relative p-2">
        <div className="header">Room Details</div>
        <div className="line h-[1px] bg-gray-100"></div>
        <div className="container">
          <div className="roomName">
            <span>Room Name: </span>
            <span>{searchedRoomData.roomName}</span>
          </div>
          <div className="roomVerified">
            <span>Is Room Verified: </span>
            <span>{searchedRoomData.isVerified ? "YES" : "NO"}</span>
          </div>
          <div className="roomBio">
            <span>Bio: </span>
            <span>{searchedRoomData.roomSummary}</span>
          </div>
          <div className="otherStats flex justify-between">
            <div className="sports">
              <span>Discussed topics: </span>
              <span>
                {searchedRoomData.sports.map((item) => {
                  return <span>{item} ,</span>;
                })}
              </span>
            </div>
            <div className="memberCount">
              <span>Member Count: </span>
              <span>{searchedRoomData.userCount}</span>
            </div>
          </div>
        </div>
        <div className="footer text-center">
          <button
            className="bg-blue-60 px-3 py-1 rounded-sm text-[black]"
            onClick={() => {
              dispatch(fetchJoinRoom());
            }}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchedRoomModal;
