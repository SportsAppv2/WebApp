import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { timeFormatter } from "../../helpers/timeFormatter";

const RoomInfoModal = () => {
  const currentRoomData = useSelector((state) => state.room.currentRoom);
  console.log(currentRoomData);
  return (
    <div className="h-[400px] w-[350px] bg-gray-100 absolute z-[9999]">
      Room Info
      <div>
        <span>Room Joining Code: </span>{" "}
        <span>{currentRoomData.joiningCode}</span>
      </div>
      <div>
        <span>Room Name: </span> <span>{currentRoomData.roomName}</span>
      </div>
      <div>
        <span>Room Summary: </span> <span>{currentRoomData.roomSummary}</span>
      </div>
      <div>
        <span>Discussed Sports: </span>{" "}
        <span>
          {currentRoomData.sports.map((sport) => {
            return sport + ", ";
          })}
        </span>
      </div>
      <div>
        <span>Room created at: </span>{" "}
        <span>{timeFormatter(currentRoomData.createdAt)}</span>
      </div>
      <div>
        <span>User count: </span> <span>{currentRoomData.userCount}</span>
      </div>
      <div>
        <span>Room Owner: </span>{" "}
        <span>
          {currentRoomData.admin.owner.name.firstName +
            " " +
            currentRoomData.admin.owner.name.lastName}
        </span>
      </div>
      <div>
        <span>Room Moderators: </span>{" "}
        <span>
          {currentRoomData.admin.moderators.map((moderator) => {
            return (
              moderator.name.firstName + " " + moderator.name.lastName + ","
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default RoomInfoModal;
