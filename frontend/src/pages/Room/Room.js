import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataInitial } from "../../store/editProfileSlice";
import Tournament from "../../components/Home/Tournament/Tournament.js";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Body from "./Body";
import { fetchPosts, roomPostsActions } from "../../store/roomPostsSlice";
import { getRoomDetails, roomActions } from "../../store/roomSlice";
import RoomNotFound from "./RoomNotFound";
import RoomNotJoined from "./RoomNotJoined";
import PostEnlarged from "../../components/Room/PostEnlarged";

const Room = () => {
  const dispatch = useDispatch();
  const scrollableDiv = useRef(null);
  const [offset, setOffset] = useState(0);
  const [stickyFeed, setStickyFeed] = useState(false);
  const roomData = useSelector((state) => state.room);
  const currentRoomData = roomData.currentRoom;
  const postData = useSelector((state) => state.roomposts);
  const { roomId } = useParams();

  // console.log(scrollableDiv.current.pageYOffset);
  const handleScroll = (event) => {
    console.log("Scrolling");
    const y = scrollableDiv.current.scrollTop;
    setOffset(y);
    if (y > 380) {
      setStickyFeed(true);
    } else {
      setStickyFeed(false);
    }
  };
  const handleScroll2 = () => {
    const node = scrollableDiv.current;
    if (node) {
      const { scrollTop, clientHeight, scrollHeight } = node;
      // console.log(scrollTop);
      dispatch(roomPostsActions.setOverallScroll(scrollTop));
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        dispatch(roomPostsActions.togglePageEndReached(true));
      }
    }
  };
  useEffect(() => {
    dispatch(fetchUserDataInitial());
    if (roomId) {
      // dispatch(fetchPosts({ roomId, postLimit: 10 }));
      dispatch(getRoomDetails({ roomId }));
      dispatch(roomActions.updateCurrentRoomId(roomId));
      console.log("ROOM not FOUND ", roomData);
    }
  }, []);
  useEffect(() => {
    console.log("HIII", postData);
    if (postData.refreshFeed == false && postData.scrollNow == true) {
      dispatch(roomPostsActions.toggleScrollNow(false));
      var s = scrollableDiv.current;
      s.scrollTop = s.scrollTop + postData.scroll.feedScroll;
      console.log(s.scrollTop);
      // console.log("Scroll ");
    }
  }, [postData.scrollNow]);
  return (
    <>
      {roomData.roomNotFound ? (
        <RoomNotFound />
      ) : roomData.roomNotJoined ? (
        <RoomNotJoined />
      ) : (
        <div
          className="bg-gradient-to-br from-[#383636] to-[#272626] w-[-webkit-fill-available] overflow-y-scroll"
          ref={scrollableDiv}
          id="scrollable-div"
          onScroll={() => {
            handleScroll2();
          }}
        >
          <Routes>
            <Route
              path="/tournament/*"
              element={<Tournament />}
              key="route-tournament-page"
            />
            <Route
              path="/post/:postId"
              element={<PostEnlarged />}
              key="route-postEnlarged-page"
            />
            <Route path="/*" element={<Body />} key="route-room-page" />
          </Routes>
        </div>
      )}
    </>
  );
};

export default Room;
