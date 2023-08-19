import React, { useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Icons from "./Icons/Icons";
import Ham from "./Ham/Ham";
import logo from "../../../assets/landing/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEngagementReq,
  fetchFollowReq,
  fetchRoomJoinReq,
} from "../../../store/notificationSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Making the fetch requests");
    dispatch(fetchFollowReq());
    dispatch(fetchRoomJoinReq());
    dispatch(fetchEngagementReq());
  }, []);
  return (
    <div className="w-full bg-landing-primary h-[70px] flex items-center justify-between px-10 py-5">
      <div className="icon text-[#A5A6F6] flex gap-5">
        <div className="img items-center">
          <img src={logo} alt="logo" className="w-[48px] h-auto" />
        </div>
        <div
          className="text text-[26px] font-bold italic flex items-center"
          onClick={() => {
            navigate("/home");
          }}
        >
          SportsHub
        </div>
      </div>
      <div className="rightItems flex">
        <Searchbar />
        <Icons />
        <Ham />
      </div>
    </div>
  );
};

export default Header;
