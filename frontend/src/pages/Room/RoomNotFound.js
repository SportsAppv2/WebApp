import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { roomActions } from "../../store/roomSlice";

const RoomNotFound = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="text-white-30 text-[28px]">
      <div className="w-full h-full items-center">
        <div className="">Oops. Page is not available at the moment. 😥</div>
        <div className="text-center">
          <button
            className=" bg-blue-100 px-3 py-1 rounded-md shadow-lg"
            onClick={() => {
              dispatch(roomActions.toggleRoomNotFound(false));
              navigate("/home");
            }}
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomNotFound;
