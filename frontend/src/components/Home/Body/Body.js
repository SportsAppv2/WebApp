import React from "react";
import RightBar from "./RightBar";
import FeedHeader from "./FeedHeader";
import NewsCard1 from "./NewsCard1";
import TopHeadlines from "./TopHeadlines";
import NewsCard2 from "./NewsCard2";

const Body = () => {
  return (
    <div className="bg-[black] w-[-webkit-fill-available] overflow-y-scroll">
      <div className="h-[200vh] flex">
        <div className="content w-[80%]">
          <FeedHeader sticky="true" />
          <div className="flex m-11 h-[270px]">
            <NewsCard1 />
            <div className="w-[1px] mx-8 h-full bg-gray-600"></div>
            <TopHeadlines />
          </div>
          <div className="h-[1px] bg-gray-600 w-[90%] ml-14"></div>
          <NewsCard2 />
          <NewsCard2 />
          <NewsCard2 />
          <NewsCard2 />
          <NewsCard2 />
          <NewsCard2 />
        </div>
        <div className="w-[1px] bg-gray-600 h-full"></div>
        <RightBar />
      </div>
    </div>
  );
};

export default Body;
