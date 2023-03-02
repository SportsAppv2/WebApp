import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeFormatter } from "../../helpers/timeFormatter";
import { GoVerified } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { modalActions } from "../../store/modalSlice";
import WarningModal from "../../components/Helpers/WarningModal";

const RoomInfoModal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal);
  const currentRoomData = useSelector((state) => state.room.currentRoom);
  useEffect(() => {
    if (modalData.button.mainBtn) {
      console.log("Button clicked ", modalData.button.mainBtn);
      dispatch(modalActions.resetButtons());
      dispatch(modalActions.toggleShowWarningModal(false));
    }
  }, [modalData.button.mainBtn]);
  console.log(currentRoomData);
  return (
    <div className="h-fit w-[350px] bg-[#1b1a1a] text-white-100 rounded-xl p-5 absolute right-11 top-11 z-[9999]">
      <div className="flex items-center mt-2 justify-center">
        <div className="font-medium text-[24px] mr-3">
          {currentRoomData.roomName}
        </div>
        {currentRoomData.isVerified ? (
          <GoVerified className="text-blue-80 text-[22px]" />
        ) : (
          ""
        )}
      </div>
      {currentRoomData.isPrivate ? (
        <div className="italic text-blue-60 text-[14px] flex justify-end mt-1">
          ( private room )
        </div>
      ) : (
        ""
      )}
      <div className="mt-3 float-right">
        <span className="italic">joining code: </span>{" "}
        <span>{currentRoomData.joiningCode}</span>
      </div>
      <div className="mt-11 mb-5 mx-2 text-gray-400">
        {currentRoomData.roomSummary}
      </div>
      <div className="otherStats flex justify-between my-6">
        <div className="sports flex">
          <span>
            {currentRoomData.sports.map((item) => {
              return (
                <div className="bg-gray-600 font-medium p-1 px-4 rounded-lg text-[14px] mx-1">
                  {item}
                </div>
              );
            })}
          </span>
        </div>
        <div className="memberCount flex items-center text-[18px]">
          <BsFillPeopleFill className="text-blue-60 text-[24px]" />
          <span className="mx-2 font-medium">{currentRoomData.userCount}</span>
        </div>
      </div>
      <div>
        <span className="text-gray-600 font-medium">owner: </span>{" "}
        <span className="text-gray-400 cursor-pointer hover:underline">
          {currentRoomData.admin.owner.name.firstName +
            " " +
            currentRoomData.admin.owner.name.lastName}
        </span>
      </div>
      <div>
        <span className="text-gray-600 font-medium">moderators: </span>{" "}
        <span className="text-gray-400 cursor-pointer hover:underline">
          {currentRoomData.admin.moderators.map((moderator) => {
            return moderator.name.firstName + " " + moderator.name.lastName;
          })}
        </span>
      </div>
      <div className="mt-5 text-gray-600 italic">
        <span>Room created at: </span>{" "}
        <span>{timeFormatter(currentRoomData.createdAt)}</span>
      </div>
      <div className="mt-4">
        <button
          className="w-full bg-[transparent] border-2 border-[#b43f3f] text-[#e4a9a9] hover:bg-[#a74d4d] hover:text-[#000] rounded-md py-1 text-[18px] transition-all"
          onClick={() => {
            dispatch(modalActions.toggleShowWarningModal(true));
          }}
        >
          Leave
        </button>
        {modalData.warningModal.showModal && (
          <WarningModal
            heading={"Do you want to delete the post?"}
            message={
              "Items in your recycle bin will be automatically deleted after 30 days. You can delete them from your recycle bin earlier by going to Activity log in your settings."
            }
            mainBtn={"Move"}
          />
        )}
      </div>
    </div>
  );
};

export default RoomInfoModal;
