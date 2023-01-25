import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillBell } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import "./Icons.css";

const Icons = () => {
  return (
    <div className="flex">
      <div className="bookmark iconDiv">
        <BsBookmarkFill className="icon text-[30px] mt-[5px]" />
      </div>
      <div className="mail iconDiv">
        <GrMail className="icon text-[32px]" />
      </div>
      <div className="notification iconDiv">
        <AiFillBell className="icon text-[30px] mt-[2px]" />
      </div>
      <div className="notification iconDiv">
        <FaUserAlt className="icon text-[25px] mt-[3px]" />
      </div>
    </div>
  );
};

export default Icons;
