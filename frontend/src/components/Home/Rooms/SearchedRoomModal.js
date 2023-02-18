import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {BsFillPeopleFill} from 'react-icons/bs'
import { fetchJoinRoom, roomActions } from "../../../store/roomSlice";

const SearchedRoomModal = () => {
  const dispatch = useDispatch();
  const searchedRoomData = useSelector((state) => state.room.searchedRoom);
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-20">
      <div
        className="w-screen h-screen fixed top-0 left-0 bg-gray-20"
      ></div>
      <div className="h-fit w-[580px] bg-[#000000] text-gray-100 m-auto mt-[80px] rounded-3xl relative p-5">
        
        
        <div className="container px-5">
          <div className="roomName text-[24px] font-medium flex justify-center">
            {searchedRoomData.roomName}
          </div> 
          {searchedRoomData.isPrivate ? <div className="italic text-blue-60 text-[14px] flex justify-end">
            ( private room )
          </div> : ""}                   
          <div className="roomBio text-gray-400 mt-2">
            {searchedRoomData.roomSummary}
          </div>
          <div></div>
          <div className="otherStats flex justify-between my-6">
            <div className="sports flex">
              <span>
                {searchedRoomData.sports.map((item) => {
                  return <div className="bg-gray-600 font-medium p-1 px-4 rounded-lg text-[14px] mx-1">
                  {item}
                  </div>;
                })}
              </span>
            </div>
            <div className="memberCount flex items-center text-[18px]">
              <BsFillPeopleFill className="text-blue-60 text-[24px]"/>
              <span className="mx-2 font-medium">{searchedRoomData.userCount}</span>
              
            </div>
          </div>
        </div>
        <div className="footer text-center my-5">
          <button className="px-3 py-1 text-lg w-[100px]  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl mr-8">
            Join
          </button>
          <button className="px-3 py-1 text-lg w-[100px] bg-[#f31b1b] bg-opacity-50 hover:bg-[#f00d0d] text-gray-200  shadow-md rounded-xl"
          onClick={() => {
            dispatch(roomActions.toogleSearchedRoomModal());
          }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchedRoomModal;
