import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { roomActions } from "../../store/roomSlice";
import Header from "../../components/Home/Body/Room/CreatePost/Header";
import UserInfo from "../../components/Home/Body/Room/CreatePost/UserInfo";
import PostContent from "../../components/Home/Body/Room/CreatePost/PostContent";
import UploadFiles from "../../components/Home/Body/Room/CreatePost/UploadFiles";
import AddTags from "../../components/Home/Body/Room/CreatePost/AddTags";
import SubmitButton from "../../components/Home/Body/Room/CreatePost/SubmitButton";
import { createpostActions } from "../../store/createpostSlice";

const NewModal = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.createpost);
  const toggle = () => {
    dispatch(roomActions.toggleModal());
  };
  console.log(data);
  // const hashadd = () => {
  //   return data.text = data.text + " #";
  // }
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0">
        <div
          className="w-screen h-screen bg-gray-20 fixed top-0 left-0"
          onClick={toggle}
        ></div>
        <div className="h-fit w-[650px] bg-[#000000] m-auto mt-[200px] rounded-3xl relative">
          <Header />
          <div className="bg-gray-600 h-[1px]"></div>
          <div className="px-5">
            <UserInfo />
            <PostContent />
          </div>
          <div 
          className="text-[#5D5FEF] text-md font-medium pl-9 mb-3 cursor-pointer hover:text-blue-60"
          onClick={() => {dispatch(createpostActions.addHashtag())}}
          >
            Add hashtag
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
