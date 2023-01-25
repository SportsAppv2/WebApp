import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import Icons from "./Icons/Icons";
import Ham from "./Ham/Ham";

const Header = () => {
  return (
    <div className="w-full bg-blue-80 h-[70px] flex items-center justify-between px-10 py-5">
      <div className="logo">Space for Logo</div>
      <div className="rightItems flex">
        <Searchbar />
        <Icons />
        <Ham />
      </div>
    </div>
  );
};

export default Header;
