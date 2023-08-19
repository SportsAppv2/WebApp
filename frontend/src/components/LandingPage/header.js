import React from "react";
import logo from "../../../src/assets/landing/logo.svg";
import { Link } from "react-router-dom";
import SignupBtn from "./essentials/signupBtn";

const Header = () => {
  const options = [
    { id: "news", name: "News", linkTo: "/news" },
    { id: "rooms", name: "Rooms", linkTo: "/rooms" },
    { id: "tournaments", name: "Tournaments", linkTo: "/tournaments" },
    { id: "shop", name: "Shop", linkTo: "/shop" },
  ];
  return (
    <>
      <div className="py-5 flex items-center justify-between px-[50px] ">
        <div className="icon text-[#A5A6F6] flex gap-5">
          <div className="img items-center">
            <img src={logo} alt="logo" className="w-[52px] h-auto" />
          </div>
          <div
            className="text text-[30px] font-bold italic flex items-center"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            SportsHub
          </div>
        </div>
        <div className="right flex items-center gap-10">
          <div className="options text-gray-300 flex gap-7 text-[20px] font-normal">
            {options.map((item) => (
              <Link to={item.linkTo}>
                <div className="option" key={item.id}>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="btns">
            {/* <SignupBtn /> */}
            <Link to={"/login"}>
              <div className="bg-gray-200 motion-safe:animate-pulse rounded-3xl shadow-lg font-semibold text-[24px] px-5 py-1 hover:bg-gray-300 transition-all cursor-pointer">
                Log in
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
