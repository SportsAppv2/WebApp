import React from "react";
import Header from "../../components/Home/Header/Header";
import LeftBar from "./LeftBar";
import SearchBar from "./SearchBar";
import PostBlock from "./PostBlock";
import SinglePost from "./SinglePost";

const Feedback = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-[#000000] overflow-y-scroll">
        <div className="content flex">
          <LeftBar />
          <div className="h-100% w-[1px] bg-gray-600"></div>
          <div className="w-full p-5 my-5">
            <div className="text-white-100 flex items-center justify-between mx-5">
              <div className="text-[30px] font-medium">Feedback & Queries</div>
              <SearchBar />
            </div>
            <div className="my-5 p-5 text-gray-400 text-[22px]">
              We appreciate user feedback and suggestions for us to improve.
              Please feel free to provide us with your valuable feedback. Also,
              ask us any of your queries or questions and our team will reach
              back to you asap unless some fellow user solves your doubt already
              🍕🍟
            </div>
            <PostBlock />
            <div className="text-gray-600 p-2 text-[20px] font-medium ml-8 my-5">
              Top posts
            </div>
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
