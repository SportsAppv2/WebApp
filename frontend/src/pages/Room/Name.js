import React from "react";
import { AiFillInfoCircle, AiFillSetting } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
const Name = (props) => {
  console.log("props are ", props);
  return (
    <>
      <div className="flex justify-between">
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
          <AiFillInfoCircle className="mx-3 cursor-pointer hover:text-gray-300" />
          <AiFillSetting className="mx-3 cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </>
  );
};

export default Name;
