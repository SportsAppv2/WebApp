import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataInitial } from "../../store/editProfileSlice";
import Tournament from "../../components/Home/Tournament/Tournament.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import Body from "./Body";

const Room = () => {
  const dispatch = useDispatch();
  const scrollableDiv = useRef(null);
  const [offset, setOffset] = useState(0);
  const [stickyFeed, setStickyFeed] = useState(false);
  const roomData = useSelector((state) => state.room);
  const currentRoomData = roomData.currentRoom;

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
        <Routes>
          <Route
            path="/tournament/*"
            element={<Tournament />}
            key="route-tournament-page"
          />
          <Route path="/*" element={<Body />} key="route-room-page" />
        </Routes>
      </div>
    </>
  );
};

export default Room;
