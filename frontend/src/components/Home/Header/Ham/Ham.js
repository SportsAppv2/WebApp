import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../../../store/headerSlice";
import "../Icons/Icons.css";
import Menu from "./Menu";

const Ham = () => {
  const data = useSelector((state) => state.header);
  const dispatch = useDispatch();
  return (
    <div className="mx-[10px] text-[#A5A6F6]">
      <RxHamburgerMenu className="text-[30px] mt-[0px] icon" onClick={() => {dispatch(headerActions.toggleMenu())}}/>
      {data.showMenu && <Menu />}
    </div>
  );
};

export default Ham;
