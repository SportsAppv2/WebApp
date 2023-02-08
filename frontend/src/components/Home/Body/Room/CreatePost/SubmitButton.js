import React from "react";
import { useDispatch } from "react-redux";
import { fetchCreatePost } from "../../../../../store/createpostSlice";

const SubmitButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <button
        className="bg-[#5D5FEF] hover:bg-blue-100 bg-opacity-50 shadow-md text-gray-200 font-medium text-lg px-3 py-1 rounded-xl"
        onClick={() => {
          dispatch(fetchCreatePost());
        }}
      >
        Post
      </button>
    </div>
  );
};

export default SubmitButton;
