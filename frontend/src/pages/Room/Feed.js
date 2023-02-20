import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, roomPostsActions } from "../../store/roomPostsSlice";
import SingleFeed from "./SingleFeed";

const Feed = () => {
  const dispatch = useDispatch();
  const roomData = useSelector((state) => state.room);
  const postData = useSelector((state) => state.roomposts);
  useEffect(() => {
    dispatch(roomPostsActions.resetPosts());
    dispatch(
      fetchPosts({
        roomId: roomData.currentRoomId,
        pageNumber: 1,
        postLimit: 10,
      })
    );
  }, [roomData.currentRoomId]);
  const feedType = useSelector((data) => data.room.currentFeedType);
  return (
    <div className="my-5">
      {postData.posts.map((post) => {
        console.log(post);
        return (
          <SingleFeed
            key={post._id}
            postId={post._id}
            dp={""}
            name={post.creator.firstName + " " + post.creator.lastName}
            userName={post.creator.userName}
            userId={post.creator.id}
            time={post.stats.createdAt}
            textContent={post.content.text}
            upvotes={post.stats.upvotes.count}
            downvotes={post.stats.downvotes.count}
            totalComments={post.comments.count}
            imageUrl={post.content.image}
            videoUrl={post.content.video}
          />
        );
      })}
      {/* <SingleFeed id="1" dp="" name="" userId="" time="" content="" image="" />
      <SingleFeed id="2" />
      <SingleFeed id="3" />
      <SingleFeed id="4" />
      <SingleFeed id="5" />
      <SingleFeed id="6" /> */}
    </div>
  );
};

export default Feed;
