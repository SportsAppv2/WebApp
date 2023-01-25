import React from "react";

const TextBox = (props) => {
  return (
    <div className={props.width}>
      <div className={`text-gray-500`}>{props.for}</div>
      <input
        type={props.type}
        className={`w-full text-white-100 bg-[transparent] border-[1px] border-gray-600 px-2 py-1`}
      />
    </div>
  );
};

export default TextBox;
