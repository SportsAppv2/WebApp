import React from "react";
import { IoMdHelpCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdFeedback, MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { headerActions } from "../../../../store/headerSlice";
import { loginActions } from "../../../../store/loginSlice";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goTo = (destination) => {
    console.log({ destination });
    dispatch(headerActions.toggleMenu());
    navigate(destination);
  };
  const accountLogout = () => {
    localStorage.removeItem("token");
    dispatch(loginActions.authChanged(false));
  };
  return (
    <div className="absolute top-[80px] right-[20px] max-h-[450px] h-fit font-medium bg-[#1b1a1a] z-[999] text-white-100 w-[350px] overflow-y-scroll p-3 rounded-lg">
      <div
        className="bg-gray-600 bg-opacity-20 hover:bg-opacity-40 p-3 rounded-lg cursor-pointer shadow-3xl flex items-center mb-3"
        onClick={() => {
          goTo("/feedback");
        }}
      >
        <div className="icon bg-gray-20 p-2 rounded-full mr-4 text-[22px]">
          <MdFeedback />
        </div>
        <div className="text text-[18px]">Feedback</div>
      </div>
      <div
        className="bg-gray-600 bg-opacity-20 hover:bg-opacity-40 p-3 rounded-lg cursor-pointer shadow-3xl flex items-center mb-3"
        onClick={() => {
          goTo("/help");
        }}
      >
        <div className="icon bg-gray-20 p-2 rounded-full mr-4 text-[22px]">
          <IoMdHelpCircle />
        </div>
        <div className="text text-[18px]">Help & support</div>
      </div>
      <div
        className="bg-gray-600 bg-opacity-20 hover:bg-opacity-40 p-3 rounded-lg cursor-pointer shadow-3xl flex items-center mb-3"
        onClick={() => {
          goTo("/settings");
        }}
      >
        <div className="icon bg-gray-20 p-2 rounded-full mr-4 text-[22px]">
          <IoSettings />
        </div>
        <div className="text text-[18px]">Settings & privacy</div>
      </div>
      <div
        className="bg-gray-600 bg-opacity-20 hover:bg-opacity-40 p-3 rounded-lg cursor-pointer shadow-3xl flex items-center"
        onClick={() => {
          accountLogout();
          goTo("/login");
        }}
      >
        <div className="icon bg-gray-20 p-2 rounded-full mr-4 text-[22px]">
          <MdLogout />
        </div>
        <div className="text text-[18px]">Log Out</div>
      </div>
    </div>
  );
};

export default Menu;
