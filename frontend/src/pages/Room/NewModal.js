import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { roomActions } from "../../store/roomSlice";
import Header from "../../components/Home/Body/Room/CreatePost/Header";
import UserInfo from "../../components/Home/Body/Room/CreatePost/UserInfo";
import PostContent from "../../components/Home/Body/Room/CreatePost/PostContent";
import UploadFiles from "../../components/Home/Body/Room/CreatePost/UploadFiles";
import AddTags from "../../components/Home/Body/Room/CreatePost/AddTags";
import SubmitButton from "../../components/Home/Body/Room/CreatePost/SubmitButton";

const NewModal = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(roomActions.toggleModal());
  };
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0">
        <div
          className="w-screen h-screen bg-gray-20 fixed top-0 left-0"
          onClick={toggle}
        ></div>
        <div className="h-fit w-[650px] bg-[#252525] m-auto mt-[200px] rounded-md relative">
          <Header />
          <div className="bg-gray-600 h-[1px]"></div>
          <div className="px-5">
            <UserInfo />
            <PostContent />
          </div>
          <div className="bg-gray-600 h-[1px]"></div>
          <div className="px-5 flex justify-between py-2">
            <UploadFiles />
            <SubmitButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewModal;
