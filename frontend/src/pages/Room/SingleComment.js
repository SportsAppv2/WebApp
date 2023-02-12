import React from 'react';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiCommentDetail, BiBookmark, BiDotsVertical } from "react-icons/bi";

const SingleComment = () => {
    const openComments = () => {
        if(props.id == 1){
          dispatch(replyActions.toggleComments());
        }    
    }
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
                        <div className="font-bold">Baibhav Saikia </div>
                        <div className="italic mx-2 text-gray-600">@cooldude69</div>
                        </div>
                        <div className="font-thin text-[16px] text-gray-600">Time</div>
                    </div>
                <div className="text-[18px]">
                    <div className="contentText">
                    No I don't think so. He sucks big time. I would prefer Antony over him any day.
                    </div>
                    <div className="contentImg">
                    <img src="" alt="" />{" "}
                    </div>
                </div>
                <div className="flex mt-3 text-gray-600 font-medium">
                    <div className="flex items-center cursor-pointer" onClick={openComments}>
                    <BiCommentDetail />
                    <div className="comments text-[16px] ml-2">321 comments</div>
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
                    <div className="text-[18px] my-3">826K</div>
                </div>
                <div className="dislikes">
                    <div className="w-fit m-auto">
                    <AiOutlineDislike />
                    </div>
                </div>
                </div>
            </div>
            <hr className="bg-gray-600 border-none h-[1px] w-[75%] ml-[75px]"/>
        </div>
    );
};

export default SingleComment;