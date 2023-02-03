import React, { useRef, useState } from "react";
import { BsImage } from "react-icons/bs";
import {AiOutlineVideoCamera} from "react-icons/ai";
import {GrEmoji} from "react-icons/gr";
import {MdOutlinePoll,MdSchedule} from "react-icons/md"
 
import "./CreatePost.css";
const UploadFiles = () => {
  const [name, setname] = useState("");
  const inputFile = useRef("");
  const onClicking = (event) => {
    if(event.target.classList.contains("image")){
      inputFile.current.children[0].children[1].click();
    }else{
      inputFile.current.children[1].children[1].click();
    }    
  }
  return (
    <div>
      <div className="flex mt-2 justify-between text-gray-600 text-[28px]">
        <div className="flex" ref={inputFile}>
          <div className="singleIcon hover:bg-[#000000]">
            <BsImage className="image mx-2 hover:text-blue-60 " onClick={(e) => onClicking(e)}/>
            <input type="file" id="file1" className="hidden" accept="image/*" onChange={(e) => setname(e.target.files[0].name)} />
          </div>
          <div className="singleIcon hover:bg-[#000000]">
            <AiOutlineVideoCamera className="video mx-2  hover:text-blue-60" onClick={(e) => onClicking(e)}/>
            <input type="file" id="file2" className="hidden" accept="video/*" />
          </div>
          <div className="singleIcon hover:bg-[#000000]">
            <GrEmoji className="mx-2  hover:text-blue-60" />
          </div>
          <div className="singleIcon hover:bg-[#000000]">
            <MdOutlinePoll className="mx-2 hover:text-blue-60"/>
          </div>
          <div className="singleIcon hover:bg-[#000000]">
            <MdSchedule className="mx-2  hover:text-blue-60 "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
