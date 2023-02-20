import React, { useEffect, useState } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiCommentDetail, BiBookmark, BiDotsVertical } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { replyActions } from "../../store/replySlice";
import CommentBlock from "./CommentBlock";
import ReplyBlock from "./ReplyBlock";

const SingleComment = (props) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="text-white-50 text-[20px]">
      <div className="flex py-5">
        <div className="w-1/12 mr-1">
          <div className="m-auto">
            <img
              src="https://pbs.twimg.com/profile_images/1458141066402488320/33d6K8kD_400x400.jpg"
              alt="DP"
              className="rounded-[500px] w-[50px] h-[50px] object-cover  m-auto"
            />
          </div>
        </div>
        <div className="w-9/12 mr-5">
          <div className="flex justify-between">
            <div className="flex">
              <div className="font-bold">{props.name}</div>
              <div className="italic mx-2 text-gray-600">@{props.userName}</div>
            </div>
            <div className="font-thin text-[16px] text-gray-600">
              {props.time}
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
      {showComments && (
        <CommentBlock postId={props.postId} commentId={props.commentId} />
      )}
      <hr className="bg-gray-600 border-none h-[1px] w-[75%] ml-[75px]" />
    </div>
  );
};

export default SingleComment;
