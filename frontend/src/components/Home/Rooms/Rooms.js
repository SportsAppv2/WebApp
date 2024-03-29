import React, { useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import "../Header/Icons/Icons.css";
import RoomIcon from "./RoomIcon";
import { Link } from "react-router-dom";
import RoomActivity from "./RoomActivity/RoomActivity.js";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../../store/homeSlice";
import { fetchRooms } from "../../../store/roomSlice";
import SearchedRoomModal from "./SearchedRoomModal";
const Rooms = () => {
  const data = useSelector((state) => state.home);
  const roomData = useSelector((state) => state.room);
  const dispatch = useDispatch("");
  const toggle = () => {
    dispatch(homeActions.pageChanged(1));
  };
  useEffect(() => {
    dispatch(fetchRooms());
    console.log("Room data is ", roomData);
  }, []);
  return (
    <>
      <div className="bg-[#8B8B8D]/10 w-[110px] text-[#A5A6F6]">
        <div className="availableRooms mt-4">
          {roomData.fetchedRooms.map((item) => {
            // console.log("Room should be created about ", item);
            return (
              <RoomIcon
                url={item.roomDetails.roomPic}
                key={item._id}
                name={item.roomDetails.roomName}
                verified={item.roomDetails.isVerified}
                roomId={item._id}
              />
            );
          })}
          {/* <RoomIcon
            url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQdidTvjgPdvdjwtelmSx8kkV6mhHETmS18aQKb7f6vqEgIYKrf&psig=AOvVaw0iUz0-AjrOpLXME85_dnss&ust=1673726820433000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjwjrasxfwCFQAAAAAdAAAAABAD"
            roomId="1"
            name="Manchester United"
            verified="true"
            routeTo="ManchesterUnited"
          />
          <RoomIcon
            url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQdidTvjgPdvdjwtelmSx8kkV6mhHETmS18aQKb7f6vqEgIYKrf&psig=AOvVaw0iUz0-AjrOpLXME85_dnss&ust=1673726820433000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjwjrasxfwCFQAAAAAdAAAAABAD"
            roomId="1"
            name="Manchester United - India Edition"
            verified="false"
            routeTo="ManchesterCity"
          /> */}
        </div>
        <div className="addRoom my-4">
          <IoIosAddCircleOutline
            className="icon text-[40px] m-auto transform hover:scale-110"
            onClick={() => {
              toggle();
            }}
          />
          {(data.pageNumber == 1 || data.pageNumber == 2) && <RoomActivity />}
          {roomData.showSearchedRoomModal && <SearchedRoomModal />}
        </div>
      </div>
    </>
  );
};

export default Rooms;
