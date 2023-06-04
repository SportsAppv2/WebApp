import React from "react";

const AuthBlock = (props) => {
  return (
    <div className="option my-2">
      <div
        className={`flex ${props.hoverColor} ${props.color} hover:cursor-pointer items-center px-7 rounded-md shadow-md`}
      >
        <div className="icon p-1">
          <img
            src={props.icon}
            className="h-[20px] md:h-[30px] w-auto"
            alt=""
          />
        </div>
        <div className={`text text-gray-100 text-[16px] md:text-[20px] px-3`}>
          Login with {props.name}
        </div>
      </div>
    </div>
  );
};

export default AuthBlock;
