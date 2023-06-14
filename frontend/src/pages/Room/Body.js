import React, { useRef, useState } from "react";
import FeedHeader from "./FeedHeader";
import Name from "./Name";
import TopNews from "./TopNews";
import Feed from "./Feed";
import UploadPost from "./UploadPost";
import NewModal from "./NewModal";
import { useSelector } from "react-redux";

const Body = () => {
  const roomData = useSelector((state) => state.room);
  const currentRoomData = roomData.currentRoom;
  const modalState = roomData.showModal; //either true of false
  const feedHeader = useRef(null);
  const [stickyFeed, setStickyFeed] = useState(false);
  return (
    <div className="content flex">
      <div className="px-7 pb-20 pt-3 w-[85%]">
        <Name roomInfo={currentRoomData} />
        <TopNews />
        <FeedHeader sticky={stickyFeed} />
        <Feed feedType="roomFeed" />
        <UploadPost />
        {modalState && <NewModal />}
      </div>
      <div className="min-h-[calc(100vh-70px)] bg-[#A5A6F6] w-[1px]"></div>
      <div className="sidebar text-white-100 w-[15%] p-6">xxx</div>
    </div>
  );
};

export default Body;
