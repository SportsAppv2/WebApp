import React, { useEffect, useRef, useState } from "react";
import { BsImage } from "react-icons/bs";
import {AiOutlineVideoCamera} from "react-icons/ai";
import {GrEmoji} from "react-icons/gr";
import {MdOutlinePoll,MdSchedule} from "react-icons/md"
import "./UploadFiles.css"
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import { createpostActions } from "../../../../../store/createpostSlice";
import EmojiPicker from "emoji-picker-react";
import Poll from "./Poll";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'

const UploadFiles = () => {
  const data = useSelector((state) => state.createpost);
  const dispatch = useDispatch();
  const inputFile = useRef("");
  const onClicking = (event) => {
    if(event.target.classList.contains("image")){
      inputFile.current.children[0].children[1].click();
    }else{
      inputFile.current.children[1].children[1].click();
    }    
  }
  const showFiles = (event) => {
    if(event.target.files[0]){
      return event.target.files[0].name;
    }
  }

  useEffect(() => {
    if(data.files==""){
      if(inputFile.current.children[0].children[1].value==""){
        inputFile.current.children[1].children[1].value="";
      }else{
        inputFile.current.children[0].children[1].value="";
      }      
    }
  },[data.files])

  const [emojiKeyboard, setEmojiKeyboard] = useState(false);

  return (
    <>
    <div>
      <div className="flex mt-2 justify-between text-gray-600 text-[28px]">
        <div className="flex items-center" ref={inputFile}>
          <div className="singleIcon hover:bg-[#000000]">
            <BsImage className="image mx-2 hover:text-blue-60 " onClick={(e) => onClicking(e)}/>
            <input type="file" id="file1" className="hidden" accept="image/*" onChange={(e) => dispatch(createpostActions.filesAdded(showFiles(e)))} />
          </div>
          <div className="singleIcon hover:bg-[#000000]">
            <AiOutlineVideoCamera className="video mx-2  hover:text-blue-60" onClick={(e) => onClicking(e)}/>
            <input type="file" id="file2" className="hidden" accept="video/*" onChange={(e) => dispatch(createpostActions.filesAdded(showFiles(e)))}/>
          </div>
          <div className="singleIcon hover:bg-[#000000]" >
            <GrEmoji className="mx-2  hover:text-blue-60" onClick={(e) => setEmojiKeyboard(!emojiKeyboard)}/>
          </div>
          <div className="singleIcon hover:bg-[#000000]">
            {/* <MdOutlinePoll className="mx-2 hover:text-blue-60" onClick={(e) => {dispatch(createpostActions.pollModal());}}/> */}
            <Popup trigger={<button>X</button>} position="right center" className="relative">
              <Poll />
            </Popup>
          </div>          
          <div className="singleIcon hover:bg-[#000000]">
            <MdSchedule className="mx-2  hover:text-blue-60 "/>
          </div>
        </div>
      </div>
    </div>
    {emojiKeyboard ?
            <div className="emoji-container absolute top-[-450px]  left-[200px] mb-[-450px]">
              <EmojiPicker width={300} emojiStyle="Google" theme="dark" onEmojiClick={(e) => dispatch(createpostActions.emojiAdded(e.emoji))} /> 
            </div>
            : "" }  
    </>
  );
};

export default UploadFiles;
