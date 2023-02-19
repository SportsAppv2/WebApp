import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRoomDetails } from "../../../store/roomSlice";

const RoomIcon = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/home/room/" + props.roomId);
    dispatch(getRoomDetails({ roomId: props.roomId }));
  };
  // useEffect(() => {
  //   dispatch(getRoomDetails({ roomId: props.roomId }));
  // }, []);

  return (
    <div className="room my-5">
      <img
        src={
          props.url
            ? props.url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZKIR5mxVGbVJGkgmBNY5RwVWN9HVgLwV6w&usqp=CAU"
        }
        alt=""
        className="h-[50px] w-[auto] rounded-[50px] m-auto cursor-pointer hover:h-[53px] transition-all"
        onClick={() => {
          handleNavigation();
        }}
      />
    </div>
  );
};

export default RoomIcon;
