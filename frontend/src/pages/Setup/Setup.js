import React from "react";
import "./Setup.css";
import Header from "../../components/setup/Header";
import Body from "../../components/setup/Body"


const Setup = () => {
  return (
    <div className="bg-[#1A1C20] w-screen h-screen md:absolute flex items-center">
      {/* <Header /> */}
      <Body />
    </div>
  );
};

export default Setup;
