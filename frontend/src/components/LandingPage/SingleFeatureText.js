import React from "react";

const SingleFeatureText = (props) => {
  return (
    <div className="text-gray-300 w-[450px] pl-14">
      <div className="font-bold text-[36px] py-11 text-[#A5A6F6] ">
        {props.heading}{" "}
        {props.comingSoon && (
          <span className="bg-[#cfcf2c] text-gray-600 text-[18px] rounded-2xl px-3 py-1 animate-pulse">
            Coming Soon!
          </span>
        )}
      </div>
      <div className="text-[20px]">{props.text}</div>
    </div>
  );
};

export default SingleFeatureText;
