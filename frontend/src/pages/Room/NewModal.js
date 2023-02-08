import React, { useEffect, useRef } from "react";
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
  const filetag = useRef("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.createpost);
  console.log(data);
  const toggle = () => {
    dispatch(roomActions.toggleModal());
  };
  useEffect(() => {
    if (!data.files == "") {
      filetag.current.classList.remove("hidden");
    } else {
      filetag.current.classList.add("hidden");
    }
  }, [data.files]);
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
            className="text-[#5D5FEF] text-md w-fit font-medium pl-9 mb-3 cursor-pointer hover:text-blue-60"
            onClick={() => {
              dispatch(createpostActions.addHashtag());
            }}
          >
            Add hashtag
          </div>
          <div
            className="files hidden flex w-fit text-white-30 bg-[#151516] rounded-lg ml-5 mb-5 p-1"
            ref={filetag}
          >
            <div>{data.files}</div>
            <button
              className="ml-3"
              onClick={() => {
                dispatch(createpostActions.filesDeleted());
              }}
            >
              <RxCross1 className="hover:text-blue-80" />
            </button>
          </div>
          <div className="bg-gray-600 h-[1px]"></div>
          <div className="px-5 flex justify-between py-2 relative">
            <UploadFiles />
            <SubmitButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewModal;
