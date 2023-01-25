import React from "react";

const RoomIcon = (props) => {
  return (
    <div className="room my-5">
      <img
        src={props.url}
        alt=""
        className="h-[50px] w-[auto] rounded-[50px] m-auto cursor-pointer hover:h-[53px] transition-all"
      />
    </div>
  );
};

export default RoomIcon;
