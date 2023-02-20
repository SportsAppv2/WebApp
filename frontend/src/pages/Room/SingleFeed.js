import React, { useState } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiCommentDetail, BiBookmark, BiDotsVertical } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { roomActions } from "../../store/roomSlice";
import CommentBlock from "./CommentBlock";

const SingleFeed = (props) => {
  const data = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const date = new Date(props.time);
  const formattedDate = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
  // console.log(data);
  return (
    <div className="text-white-50 text-[20px] relative">
      <div className="flex py-5">
        <div className="w-1/12 mr-1">
          <div className="flex-col m-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBBHpIKwwDXQrCf_lf4prJHLrddzCt0lWGfXlZKyJmw&s"
              alt="DP"
              className="rounded-[500px] w-[50px] h-[50px] object-cover  m-auto"
            />
            {data.showComments && (
              <div className="w-[1px] absolute left-[45px] bg-gray-600 h-[100%]"></div>
            )}
          </div>
        </div>
        <div className="w-9/12 mr-5">
          <div className="flex justify-between">
            <div className="flex">
              <div className="font-bold">{props.name}</div>
              <div className="italic mx-2 text-gray-600">@{props.userName}</div>
            </div>
            <div className="font-thin text-[16px] text-gray-600">
              {formattedDate}
            </div>
          </div>
          <div className="text-[18px]">
            <div className="contentText">{props.textContent}</div>
            <div className="contentImg">
              <img src="" alt="" />{" "}
            </div>
          </div>
          <div className="flex mt-3 text-gray-600 font-medium">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                setShowComments(!showComments);
              }}
            >
              <BiCommentDetail />
              <div className="comments text-[16px] ml-2">
                {props.totalComments} comments
              </div>
            </div>
            <div className="flex items-center mx-5">
              <AiOutlineShareAlt />
              <div className="share text-[16px] ml-2">Share</div>
            </div>
            <div className="flex items-center mx-3">
              <BiBookmark />
              <div className="save text-[16px] ml-2">Save</div>
            </div>
            <div className="flex items-center mx-3">
              <BiDotsVertical />
            </div>
          </div>
        </div>
        <div className="w-2/12  text-gray-600 text-center">
          <div className="likes mt-5">
            <div className="w-fit m-auto">
              <AiOutlineLike />
            </div>
            <div className="text-[18px] my-3">
              {props.upvotes - props.downvotes}
            </div>
          </div>
          <div className="dislikes">
            <div className="w-fit m-auto">
              <AiOutlineDislike />
            </div>
          </div>
        </div>
      </div>
      {showComments && <CommentBlock postId={props.postId} commentId="" />}
      <hr className="bg-gray-600 border-none h-[1px] w-[75%] ml-[70px]" />
    </div>
  );
};

export default SingleFeed;
