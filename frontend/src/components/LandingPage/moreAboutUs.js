import React from "react";
import SignupBtn from "./essentials/signupBtn";

const MoreAboutUs = () => {
  return <div className="bg-[#865DFF] h-[600px] mt-11 flex flex-col items-center justify-center">
    <div className="text-gray-300 px-[370px] pb-14 text-[30px] text-center">
      Join SportsHub today and become part of an extraordinary sports community. Unleash your passion, connect with fellow fans, and embrace the exhilaration of the game. Download the app now and let the games begin!
    </div>
    <SignupBtn />
  </div>;
};

export default MoreAboutUs;
