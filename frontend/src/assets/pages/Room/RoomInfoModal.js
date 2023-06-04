import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timeFormatter } from "../../helpers/timeFormatter";
import { GoVerified } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { modalActions } from "../../store/modalSlice";
import WarningModal from "../../components/Helpers/WarningModal";
import { leaveRoom, roomActions } from "../../store/roomSlice";
import { useNavigate, useParams } from "react-router-dom";

const RoomInfoModal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal);
  const roomData = useSelector((state) => state.room);
  const navigate = useNavigate();
  const { roomId } = useParams();
  const currentRoomData = useSelector((state) => state.room.currentRoom);
  useEffect(() => {
    if (modalData.button.mainBtn) {
      console.log("Button clicked ", modalData.button.mainBtn, roomId);
      dispatch(modalActions.resetButtons());
      dispatch(modalActions.toggleShowWarningModal(false));
      dispatch(leaveRoom({ roomId }));
    }
    if (roomData.roomLeft == true) {
      console.log("INSIDE THE RESTRICTED USEEFFECT. ", roomData);
      dispatch(modalActions.toggleShowWarningModal(false));
      dispatch(roomActions.toggleRoomLeft(false));
      dispatch(roomActions.removedRoom(roomId));
      navigate("/home");
    }
  }, [modalData.button.mainBtn, roomData.roomLeft]);
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
      <div className="mt-3 flex justify-between">
        <div className="">
          <span className="italic">Joining code: </span>{" "}
          <span>{currentRoomData.joiningCode}</span>
        </div>
        <div className="memberCount flex items-center text-[18px] w-[20%]">
          <BsFillPeopleFill className="text-blue-60 text-[24px]" />
          <span className="mx-2 font-medium">{currentRoomData.userCount}</span>
        </div>
      </div>
      <div className="mt-5 mb-5 text-gray-400">
        {currentRoomData.roomSummary}
      </div>
      <div className="otherStats flex justify-between my-6">
        <div className="sports">
          <div className="flex flex-wrap">
            {currentRoomData.sports.map((item) => {
              return (
                <div className="bg-gray-600 font-medium p-1 px-4 rounded-lg text-[14px] mx-1 my-1">
                  {item}
                </div>
              );
            })}
          </div>
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
        <span className="text-gray-400 ">
          {currentRoomData.admin.moderators.map((moderator) => {
            return (
              <>
                <span className="cursor-pointer hover:underline">
                  {moderator.name.firstName + " " + moderator.name.lastName}
                </span>
                <span>, </span>
              </>
            );
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
            heading={"Do you want unfollow this page?"}
            message={
              "You'll not be able to see the posts of this group once you leave it. You can rejoin anytime you want."
            }
            mainBtn={"Leave"}
          />
        )}
      </div>
    </div>
  );
};

export default RoomInfoModal;
