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
        className="absolute mx-4 mt-3 cursor-pointer right-0 text-[28px] text-[#5D5FEF] hover:text-blue-60 transition-all duration-200"
        onClick={toggle}
      />
      <div className="writePostHeader text-left text-[24px] mx-5 py-2 text-[#5D5FEF]">
        Create a post
      </div>
    </>
  );
};

export default Header;
