import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPeopleFill } from "react-icons/bs";
import { fetchJoinRoom, roomActions } from "../../../store/roomSlice";
import RoomDetails from "./RoomDetails";

const SearchedRoomModal = () => {
  const dispatch = useDispatch();
  const searchedRoomData = useSelector((state) => state.room.searchedRoom);
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-20">
      <div className="w-screen h-screen fixed top-0 left-0 bg-gray-20"></div>
      <RoomDetails />
    </div>
  );
};

export default SearchedRoomModal;
