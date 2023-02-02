import React from "react";
import "./Room.css";

const SingleNewsBlock = (props) => {
  return (
    <li className="hs_item h-[250px] w-[200px] inline-block mr-5 cursor-pointer hover:scale-105 ease-in-out duration-300 relative">
      <img
        src={props.image}
        alt="News Image"
        className="h-[250px] w-[200px] object-cover rounded-md"
      />
      <div className="title max-h-[150px] w-[200px] text-white-50">
        {props.header}
      </div>
    </li>
  );
};

export default SingleNewsBlock;
