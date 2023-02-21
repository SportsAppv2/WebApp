import React, { useEffect, useRef, useState } from "react";
import FeedHeader from "./FeedHeader";
import Name from "./Name";
import TopNews from "./TopNews";
import Feed from "./Feed";
import UploadPost from "./UploadPost";
import { useDispatch, useSelector } from "react-redux";
import NewModal from "./NewModal";
import { fetchUserDataInitial } from "../../store/editProfileSlice";
import Tournament from "./Tournament";

const Room = () => {
  const dispatch = useDispatch();
  const roomData = useSelector((state) => state.room);
  const currentRoomData = roomData.currentRoom;
  const modalState = roomData.showModal; //either true of false
  const scrollableDiv = useRef(null);
  const feedHeader = useRef(null);
  const [offset, setOffset] = useState(0);
  const [stickyFeed, setStickyFeed] = useState(false);
  // console.log(scrollableDiv.current.pageYOffset);
  const handleScroll = (event) => {
    const y = scrollableDiv.current.scrollTop;
    setOffset(y);
    if (y > 380) {
      setStickyFeed(true);
    } else {
      setStickyFeed(false);
    }
  };
  useEffect(() => {
    dispatch(fetchUserDataInitial());
    scrollableDiv.current.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollableDiv.current) {
        scrollableDiv.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  useEffect(() => {
    console.log(currentRoomData);
  }, [currentRoomData]);
  return (
    <>
      <div
        className="bg-[black] w-[-webkit-fill-available] overflow-y-scroll"
        ref={scrollableDiv}
      >
        {roomData.showTournament ? <Tournament /> : 
        <div className="content flex">
          <div className="px-7 pb-20 pt-3 w-[85%]">
            <Name roomInfo={currentRoomData} />
            <TopNews />
            <FeedHeader sticky={stickyFeed} />
            <Feed feedType="roomFeed" />
            <UploadPost />
            {modalState && <NewModal />}
          </div>
          <div className="h-100% bg-gray-600 w-[1px]"></div>
          <div className="sidebar text-white-100 w-[15%] p-6">xxx</div>
        </div>}
        
      </div>
    </>
  );
};

export default Room;
