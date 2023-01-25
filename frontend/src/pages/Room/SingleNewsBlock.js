import React from "react";
import "./Room.css";

const SingleNewsBlock = (props) => {
  return (
    <li className="hs_item h-[300px] w-[250px] mr-5 shadow-inner shadow-gray-600 text-white relative rounded-md">
      <img
        src={props.image}
        alt="News Image"
        className="h-[300px] w-[250px] object-cover rounded-md"
      />
      <div className="title max-h-[200px] w-[250px] text-white-50">
        {props.header}
      </div>
    </li>
  );
};

export default SingleNewsBlock;
