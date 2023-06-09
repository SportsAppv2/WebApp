import React from "react";
import img1 from "../../assets/landing/in progress.svg";

const PageInProgress = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-landing-secondary to-landing-third flex items-center justify-center">
      <div className="flex">
        <img src={img1} alt="logo" className="w-9/12" />
        <div className="text-[72px] font-bold flex flex-col justify-center bg-gradient-to-r from-[#FFFFFF] to-[#E5E6E4] text-[transparent] bg-clip-text">
          <div className="">WORK</div>
          <div className="">IN</div>
          <div className="">PROGRESS</div>
        </div>
      </div>
    </div>
  );
};

export default PageInProgress;
