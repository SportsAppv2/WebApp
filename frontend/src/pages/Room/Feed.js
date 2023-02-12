import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SingleFeed from "./SingleFeed";

const Feed = () => {
  const feedType = useSelector((data) => data.room.currentFeedType);
  return (
    <div className="my-5">
      <SingleFeed id="1" dp="" name="" userId="" time="" content="" image="" />
      <SingleFeed id="2"/>
      <SingleFeed id="3"/>
      <SingleFeed id="4"/>
      <SingleFeed id="5"/>
      <SingleFeed id="6"/>
    </div>
  );
};

export default Feed;
