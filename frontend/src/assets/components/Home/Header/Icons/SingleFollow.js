import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchAcceptFollow,
  fetchDeclineFollow,
} from "../../../../store/notificationSlice";

const SingleFollow = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="my-4 shadow-2xl bg-gray-600 bg-opacity-20 p-2 rounded-xl">
      <div className="flex items-center">
        <div className="rounded-full h-[40px] w-[40px]">
          <img
            src={
              props.profilePic
                ? props.profilePic
                : "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            }
            alt="dp"
            className="rounded-full object-cover"
          />
        </div>
        <div className="mx-1 ml-3">{props.name}</div>
      </div>
      <div className="flex justify-center my-2">
        <button
          className="px-3 py-1 text-md  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl mr-3"
          onClick={() =>
            dispatch(fetchAcceptFollow({ followerId: props.userId }))
          }
        >
          Accept
        </button>
        <button
          className="px-3 py-1 text-md  bg-[#5D5FEF] bg-opacity-50 hover:bg-blue-100 text-gray-200  shadow-md rounded-xl"
          onClick={() =>
            dispatch(fetchDeclineFollow({ followerId: props.userId }))
          }
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default SingleFollow;
