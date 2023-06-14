import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillBell } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import "./Icons.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../../../store/headerSlice";
import Notifications from "./Notifications";

const Icons = () => {
  const data = useSelector((state) => (state.header));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="flex text-[#A5A6F6]">
      <div className="bookmark iconDiv">
        <BsBookmarkFill className="icon text-[22px] mt-[5px]" />
      </div>
      <div className="mail iconDiv">
        <GrMail className="icon text-[28px]" />
      </div>
      <div className="notification iconDiv" onClick={()=>{dispatch(headerActions.toggleNotifications())}}>
        <AiFillBell className="icon text-[26px] mt-[2px]" />
      </div>
      <div className="notification iconDiv">
        <FaUserAlt
          className="icon text-[21px] mt-[3px]"
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
      {data.showNotifications && <Notifications />}
    </div>
  );
};

export default Icons;
