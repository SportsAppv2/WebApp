import React, { useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Icons from "./Icons/Icons";
import Ham from "./Ham/Ham";
import logo from "../../../assets/iconLogo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
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
  }, []);
  return (
    <div className="w-full bg-[#5D5FEF] h-[70px] flex items-center justify-between px-10 py-5">
      <div
        className="flex cursor-pointer"
        onClick={() => {
          navigate("/home");
        }}
      >
        <div className="logoIcon h-auto mr-2 ml-auto">
          <img
            src={logo}
            className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
            alt="Logo"
          />
        </div>
        <div className="logoText text-white-100 h-auto ml-0 mr-auto text-[24px] md:text-[22px]">
          Sports Hub
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
