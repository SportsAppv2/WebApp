import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { roomActions } from "../../../../../store/roomSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(roomActions.toggleModal());
  };
  return (
    <>
      <RxCross1
        className="absolute mx-3 mt-4 cursor-pointer right-0 text-[28px] text-blue-70 hover:text-white-30 transition-all duration-200"
        onClick={toggle}
      />
      <div className="writePostHeader text-left text-[28px] mx-3 py-2 text-blue-70">
        Create a post
      </div>
    </>
  );
};

export default Header;
