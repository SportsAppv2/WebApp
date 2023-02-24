import React, { useState } from "react";
import { AiFillInfoCircle, AiFillSetting } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { roomActions } from "../../store/roomSlice";
import RoomInfoModal from "./RoomInfoModal";
import RoomSettingsModal from "./RoomSettingsModal";
import { AiFillTrophy } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Name = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("props are ", props);
  const roomData = useSelector((state) => state.room);
  return (
    <>
      <div className="flex justify-between relative">
        <div className="flex items-center">
          <div className="text-[white] text-[24px] mr-3">
            {props.roomInfo.roomName}
          </div>
          {props.roomInfo.isVerified ? (
            <GoVerified className="text-blue-80 text-[22px]" />
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center icons text-white-30 text-[28px]">
          <AiFillTrophy
            className="mx-3 cursor-pointer hover:text-gray-300"
            onClick={() => {
              navigate("tournament");
            }}
          />
          <AiFillInfoCircle
            className="mx-3 cursor-pointer hover:text-gray-300"
            onClick={() => {
              // setSettingsModal(false);
              dispatch(roomActions.toggleRoomInfoModal());
            }}
          />
          <AiFillSetting
            className="mx-3 cursor-pointer hover:text-gray-300"
            onClick={() => {
              // setInfoModal(false);
              dispatch(roomActions.toggleRoomSettingsModal());
            }}
          />
        </div>
        {roomData.showRoomInfoModal && <RoomInfoModal />}
        {roomData.showRoomSettingsModal && <RoomSettingsModal />}
      </div>
    </>
  );
};

export default Name;
