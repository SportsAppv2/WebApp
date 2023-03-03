import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePost } from "../../store/roomPostsSlice";

const MoreOptions = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  console.log("USER ID IS ", userData.userId, props.userId);
  return (
    <div className="w-[200px] right-[10px] top-[30px] text-[14px] z-10 bg-gray-600 text-white-30 absolute rounded-sm p-2 shadow-lg">
      {userData.userId == props.userId && (
        <div
          className="delete flex items-center border-b border-white-30 py-1 cursor-pointer hover:bg-gray-500"
          onClick={() => {
            dispatch(fetchDeletePost({ postId: props.postId }));
          }}
        >
          <AiOutlineDelete className="ml-1 mr-2 text-[18px]" />
          <div className="font-normal">Delete</div>
        </div>
      )}
      <div className="delete flex items-center border-b border-white-30 py-1 cursor-pointer hover:bg-gray-500">
        <GoReport className="ml-1 mr-2 text-[18px]" />
        <div className="font-normal">Report</div>
      </div>
    </div>
  );
};

export default MoreOptions;
