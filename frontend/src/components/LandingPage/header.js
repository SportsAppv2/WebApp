import React from "react";
import logo from "../../../src/assets/landing/logo.svg";
import { Link } from "react-router-dom";
import SignupBtn from "./essentials/signupBtn";

const Header = () => {
  const options = [
    { id: "rooms", name: "Rooms", linkTo: "/rooms" },
    { id: "tournaments", name: "Tournaments", linkTo: "/tournaments" },
    { id: "shop", name: "Shop", linkTo: "/shop" },
  ];
  return (
    <>
      <div className="py-5 flex items-center justify-between">
        <div className="icon text-[#A5A6F6] flex gap-5">
          <div className="img items-center">
            <img src={logo} alt="logo" className="w-[80px] h-auto" />
          </div>
          <div className="text text-[40px] font-bold italic flex items-center">
            SportsHub
          </div>
        </div>
        <div className="right flex gap-10">
          <div className="options text-gray-300 flex gap-7 text-[28px] font-normal">
            {options.map((item) => (
              <Link to={item.linkTo}>
                <div className="option" key={item.id}>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="btns">
            <SignupBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
