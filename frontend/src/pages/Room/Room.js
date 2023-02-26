import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataInitial } from "../../store/editProfileSlice";
import Tournament from "../../components/Home/Tournament/Tournament.js";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Body from "./Body";
import { fetchPosts, roomPostsActions } from "../../store/roomPostsSlice";
import { getRoomDetails, roomActions } from "../../store/roomSlice";

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
      console.log(scrollTop + clientHeight - (scrollHeight - 500));
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
    }
    // scrollableDiv.current.addEventListener("scroll", handleScroll);

    // return () => {
    //   if (scrollableDiv.current) {
    //     scrollableDiv.current.removeEventListener("scroll", handleScroll);
    //   }
    // };
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("Entered the useEffect hook");
  //     const node = scrollableDiv.current;
  //     if (node) {
  //       const { scrollTop, clientHeight, scrollHeight } = node;
  //       if (scrollTop + clientHeight >= scrollHeight - 500) {
  //         dispatch(roomPostsActions.currentPageIncreased());
  //         if (true) {
  //           dispatch(
  //             fetchPosts({
  //               roomId: roomData.currentRoomId,
  //               postLimit: 10,
  //             })
  //           );
  //         }
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollableDiv]);
  return (
    <>
      <div
        className="bg-[black] w-[-webkit-fill-available] overflow-y-scroll"
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
          <Route path="/*" element={<Body />} key="route-room-page" />
        </Routes>
      </div>
    </>
  );
};

export default Room;
