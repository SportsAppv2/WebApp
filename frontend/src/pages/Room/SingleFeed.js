import React from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiCommentDetail, BiBookmark, BiDotsVertical } from "react-icons/bi";

const SingleFeed = () => {
  return (
    <div className="text-white-50 text-[22px]">
      <div className="flex py-5">
        <div className="w-1/12 mr-2">
          <div className="m-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBBHpIKwwDXQrCf_lf4prJHLrddzCt0lWGfXlZKyJmw&s"
              alt="DP"
              className="rounded-[500px] w-[100px] h-[100px] object-cover  m-auto"
            />
          </div>
        </div>
        <div className="w-8/12 mr-5">
          <div className="flex justify-between">
            <div className="flex">
              <div className="font-bold">Fabrizio Romano </div>
              <div className="italic mx-2">@FabrizioRomano</div>
            </div>
            <div className="font-thin">Time</div>
          </div>
          <div className="text-[20px]">
            <div className="contentText">
              “He’s key player. He won’t leave”. Ten Hag was clear in meetings
              with Man United board last June… and Marcus Rashford is literally
              flying #MUFC 15 goals and 6 assists in 25 apps this season with
              Manchester United.
            </div>
            <div className="contentImg">
              <img src="" alt="" />{" "}
            </div>
          </div>
          <div className="flex mt-3">
            <div className="flex items-center">
              <BiCommentDetail />
              <div className="comments text-[18px] ml-1">57</div>
            </div>
            <div className="flex items-center mx-3">
              <AiOutlineShareAlt />
            </div>
            <div className="flex items-center mx-3">
              <BiBookmark />
            </div>
            <div className="flex items-center mx-3">
              <BiDotsVertical />
            </div>
          </div>
        </div>
        <div className="w-2/12">
          <div className="likes">
            <div className="">
              <AiOutlineLike />
            </div>
            <div className="text-[18px] mb-2">1.7K</div>
          </div>
          <div className="dislikes">
            <div className="">
              <AiOutlineDislike />
            </div>
            <div className="text-[18px]">256</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleFeed;
