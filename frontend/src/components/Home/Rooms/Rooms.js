import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import "../Header/Icons/Icons.css";
import RoomIcon from "./RoomIcon";
import { Link } from "react-router-dom";
import RoomActivity from "./RoomActivity/RoomActivity.js";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../../store/homeSlice";
const Rooms = () => {
  const data = useSelector((state) => state.home)
  const dispatch = useDispatch("")
  const toggle = () => {
    dispatch(homeActions.pageChanged(1));
  }
  return (
    <>
      <div className="bg-[#8B8B8D]/50 w-[110px]">
        <div className="availableRooms mt-4">
          <Link to="/home/room">
            <RoomIcon
              url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQdidTvjgPdvdjwtelmSx8kkV6mhHETmS18aQKb7f6vqEgIYKrf&psig=AOvVaw0iUz0-AjrOpLXME85_dnss&ust=1673726820433000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjwjrasxfwCFQAAAAAdAAAAABAD"
              roomId="1"
              name="Manchester United"
              verified="true"
            />
          </Link>
          <RoomIcon
            url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQdidTvjgPdvdjwtelmSx8kkV6mhHETmS18aQKb7f6vqEgIYKrf&psig=AOvVaw0iUz0-AjrOpLXME85_dnss&ust=1673726820433000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjwjrasxfwCFQAAAAAdAAAAABAD"
            roomId="1"
            name="Manchester United - India Edition"
            verified="false"
          />
        </div>
        <div className="addRoom my-4">
          <IoIosAddCircleOutline className="icon text-[40px] m-auto" onClick={() =>{toggle()}}/>
          {(data.pageNumber==1 || data.pageNumber==2) && <RoomActivity />}
        </div>
      </div>
    </>
  );
};

export default Rooms;
