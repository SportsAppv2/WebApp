import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SingleFeed from "./SingleFeed";

const Feed = () => {
  const feedType = useSelector((data) => data.room.currentFeedType);
  return (
    <div>
      <SingleFeed id="" dp="" name="" userId="" time="" content="" image="" />
      <SingleFeed />
      <SingleFeed />
      <SingleFeed />
      <SingleFeed />
      <SingleFeed />
    </div>
  );
};

export default Feed;
