import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replyActions } from "../../store/replySlice";
import ReplyFiles from "./ReplyFiles";
import { RxCross1 } from "react-icons/rx";
import { fetchCreateComment } from "../../store/roomCommentsSlice";

const ReplyBlock = (props) => {
  const userData = useSelector((state) => state.editProfile);
  const data = useSelector((state) => state.reply);
  const dispatch = useDispatch();
  const filetag = useRef("");
  const ta = useRef("");
  console.log("Props data is ", props);
  useEffect(() => {
    if (!data.files == "") {
      filetag.current.classList.remove("hidden");
    } else {
      filetag.current.classList.add("hidden");
    }
  }, [data.files]);
  // useEffect(()=> {
  //     ta.current.focus();
  // }, [data.text])
  return (
    <div className="bg-[#000000] border-gray-600 border-2 text-gray-600 rounded-3xl p-3">
      <div className="flex ml-11 text-[16px] font-medium italic">
        <div>replying to</div>
        <div className="text-[#5D5FEF] ml-2">@{props.userName}</div>
      </div>
      <div className="flex mt-2 ml-2">
        <div className="h-[50px] w-[50px] rounded-full mr-3">
          <img
            src={
              userData.userOriginal.profilePic
                ? userData.userOriginal.profilePic
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBBHpIKwwDXQrCf_lf4prJHLrddzCt0lWGfXlZKyJmw&s"
            }
            alt=""
            className="h-[100%] w-[100%] object-cover rounded-full"
          />
        </div>
        <textarea
          ref={ta}
          value={data.text}
          onChange={(e) => {
            dispatch(replyActions.contentChanged(e.target.value));
          }}
          className="bg-gray-600 text-white-30 text-[18px] focus:outline-none px-5 pt-3 w-full h-fit rounded-md shadow-md bg-[transparent]"
          placeholder={`Comment as @${userData.userName}`}
        ></textarea>
      </div>
      <div
        className="text-[#5D5FEF] text-[14px] w-fit font-medium pl-9 mb-3 cursor-pointer hover:text-blue-60"
        onClick={() => dispatch(replyActions.addHashtag())}
      >
        Add hashtag
      </div>
      <div
        className="files text-[14px] hidden flex w-fit text-white-30 bg-[#151516] rounded-lg ml-5 mb-5 p-1"
        ref={filetag}
      >
        <div>{data.files}</div>
        <button
          className="ml-3"
          onClick={() => {
            dispatch(replyActions.filesDeleted());
          }}
        >
          <RxCross1 className="hover:text-blue-80" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <ReplyFiles />
        <div className="flex items-center float-right">
          <button
            className="bg-[#5D5FEF] hover:bg-blue-100 bg-opacity-50 shadow-md text-gray-200 font-medium text-[16px] px-3 py-1 mr-5 rounded-xl"
            onClick={() => {
              console.log("CLicked");
              dispatch(
                fetchCreateComment({
                  postId: props.postId,
                  commentId: props.commentId,
                })
              );
            }}
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyBlock;
