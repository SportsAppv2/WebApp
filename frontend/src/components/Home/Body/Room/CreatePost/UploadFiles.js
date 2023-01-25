import React from "react";
import { BsImage } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";
import "./CreatePost.css";
const UploadFiles = () => {
  return (
    <div>
      <div className="flex mt-2 justify-between">
        <div className="flex">
          <div className="singleIcon">
            <AiOutlineTags className="text-gray-200 text-[34px]" />
          </div>
          <div className="singleIcon">
            <BsImage className="text-gray-200 text-[34px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
