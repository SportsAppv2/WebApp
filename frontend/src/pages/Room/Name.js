import React from "react";
import { GoVerified } from "react-icons/go";
const Name = (props) => {
  return (
    <>
      <div className="flex items-center">
        <div className="text-[white] text-[32px] mr-5">{props.name}</div>
        <GoVerified className="text-blue-80 text-[28px]" />
      </div>
    </>
  );
};

export default Name;
