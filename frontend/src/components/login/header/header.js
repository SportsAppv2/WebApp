import React from "react";
import Logo from "../../../assets/iconLogo.svg";

const header = () => {
  return (
    <section className="header pt-1">
      <div className="fnpmlex justify-between px-5 md:px-20 text-gray-100 h-16">
        <div className="left flex">
          <div className="logoIcon pr-3 h-auto m-auto">
            <img
              src={Logo}
              className="h-[24px] w-[24px] md:h-[48px] md:w-[48px]"
              alt="Logo"
            />
          </div>
          <div className="logoText h-auto m-auto text-[24px] md:text-[39px]">
            Sports App
          </div>
        </div>
        <div className="right flex">
          <div className="h-auto m-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default header;
