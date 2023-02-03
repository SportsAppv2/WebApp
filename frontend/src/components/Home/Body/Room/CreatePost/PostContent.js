import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createpostActions } from "../../../../../store/createpostSlice";

const PostContent = () => {
  const ta=useRef("");
  const dispatch = useDispatch();
  const data = useSelector(state => (state.createpost));
  useEffect(()=> {
    ta.current.focus();
  }, [data.text])
  return (
    <>
      <div className="">
        <textarea
          name="Write Post"
          id=""
          placeholder="What do you want to talk about?"
          className="bg-gray-600 text-white-30 text-[18px] focus:outline-none px-5 pt-3 w-full h-[150px] rounded-md shadow-md bg-[transparent]"
          ref={ta}
          value={data.text}  
          onChange={(e) => {dispatch(createpostActions.contentChanged(e.target.value))}}      
        ></textarea>
      </div>
    </>
  );
};

export default PostContent;
