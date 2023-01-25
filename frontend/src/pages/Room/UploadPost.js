import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { roomActions } from "../../store/roomSlice";

const UploadPost = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(roomActions.toggleModal());
  };
  return (
    <div className="absolute right-0 bottom-0 m-[20px]">
      <div
        className="w-[70px] h-[70px] rounded-md cursor-pointer transition-all shadow-sm shadow-gray-400 bg-gray-400 hover:bg-gray-200 flex justify-center items-center"
        onClick={toggle}
      >
        <BsPencilFill className="text-[32px]" />
      </div>
    </div>
  );
};

export default UploadPost;
