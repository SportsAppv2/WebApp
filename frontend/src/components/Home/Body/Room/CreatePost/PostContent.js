import React from "react";

const PostContent = () => {
  return (
    <>
      <div className="">
        <textarea
          name="Write Post"
          id=""
          placeholder="What do you want to talk about?"
          className="bg-gray-600 text-white-30 text-[18px] focus:outline-none px-5 pt-3 w-full h-[150px] rounded-md shadow-md bg-[transparent]"
        ></textarea>
      </div>
    </>
  );
};

export default PostContent;
