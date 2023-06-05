import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)] pb-[120px] px-[50px] ">
      <div className="headerContents">
        <div className="flex flex-col items-center big text-[84px] font-extrabold bg-gradient-to-r from-[#7879F1] to-[#A5A6F6] text-[transparent] bg-clip-text leading-[110px] italic">
          <div className="">Connect</div>
          <div className="">Compete</div>
          <div className="">Celebrate</div>
        </div>
        <div className="text-[24px] text-gray-300 w-[450px] text-center flex m-auto mt-5">
          Unleash Your Passion for Sports, Connect with Fellow Fans, and Dive
          into Thrilling Tournaments!
        </div>
      </div>
    </div>
  );
};

export default Hero;
