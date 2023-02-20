import React from 'react';
import {
    AiOutlineLike,
    AiOutlineDislike,
    AiOutlineShareAlt,
  } from "react-icons/ai";
  import { BiCommentDetail, BiBookmark, BiDotsVertical } from "react-icons/bi";

const SinglePost = () => {
    return (
        <div className="text-white-50 text-[20px]">
            <div className="flex py-5">
                <div className="w-1/12 mr-1">
                <div className="m-auto">
                    <img
                    src="https://www.whoa.in/download/cristiano-ronaldo-back-view-wallpaper"
                    alt="DP"
                    className="rounded-[500px] w-[50px] h-[50px] object-cover  m-auto"
                    />
                </div>
                </div>
                <div className="w-9/12 mr-5">
                <div className="flex justify-between">
                    <div className="flex">
                    <div className="font-bold">Adam Smith </div>
                    <div className="italic mx-2 text-gray-600">@hornyguy</div>
                    </div>
                    <div className="font-thin text-[16px] text-gray-600">Time</div>
                </div>
                <div className="text-[18px]">
                    <div className="contentText">
                        The main problem with this platform that I find is that it is too good to be true. I want to invest all my life savings on it but I am scared that how can soemthing be so good. Please make some errors or faults so that I can be sure that its a real platform.
                    </div>
                    <div className="contentImg">
                    <img src="" alt="" />{" "}
                    </div>
                </div>
                <div className="flex mt-3 text-gray-600 font-medium">
                    <div className="flex items-center">
                    <BiCommentDetail />
                    <div className="comments text-[16px] ml-2">5.2k comments</div>
                    </div>
                </div>
                </div>
                <div className="w-2/12  text-gray-600 text-center">
                <div className="likes mt-5">
                    <div className="w-fit m-auto">
                    <AiOutlineLike />
                    </div>
                    <div className="text-[18px] my-3">1.7K</div>
                </div>
                <div className="dislikes">
                    <div className="w-fit m-auto">
                    <AiOutlineDislike />
                    </div>
                </div>
                </div>
            </div>
            <hr className="bg-gray-600 border-none h-[1px] w-[85%]"/>
        </div>
    );
};

export default SinglePost;