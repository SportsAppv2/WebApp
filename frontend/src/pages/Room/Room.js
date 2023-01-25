import React, { useEffect, useRef, useState } from "react";
import FeedHeader from "./FeedHeader";
import Name from "./Name";
import TopNews from "./TopNews";
import Feed from "./Feed";
import UploadPost from "./UploadPost";
import { useSelector } from "react-redux";
import NewModal from "./NewModal";

const Room = () => {
  const roomData = useSelector((state) => state.room);
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
    scrollableDiv.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollableDiv.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="bg-[black] w-[-webkit-fill-available] overflow-y-scroll"
        ref={scrollableDiv}
      >
        <div className="content">
          <div className="px-7 py-2">
            <Name name="Manchester United" />
            <TopNews />
            <FeedHeader sticky={stickyFeed} />
            <Feed />
            <UploadPost />
            {modalState && <NewModal />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
