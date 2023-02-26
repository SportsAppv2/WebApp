import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOwnPosts,
  fetchPosts,
  roomPostsActions,
} from "../../store/roomPostsSlice";
import SingleFeed from "./SingleFeed";

const Feed = (props) => {
  const dispatch = useDispatch();
  const roomData = useSelector((state) => state.room);
  const postData = useSelector((state) => state.roomposts);
  useEffect(() => {
    if (props.feedType == "roomFeed") {
      dispatch(roomPostsActions.resetPosts());
      dispatch(
        fetchPosts({
          roomId: roomData.currentRoomId,
          postLimit: 10,
        })
      );
    } else if (props.feedType == "profileFeed") {
      dispatch(roomPostsActions.resetPosts());
      dispatch(
        fetchOwnPosts({
          postLimit: 10,
        })
      );
    }
  }, [roomData.currentRoomId, props.feedType]);
  useEffect(() => {
    if (
      postData.reachedPageEnd == true &&
      postData.isLoading == false &&
      postData.hasMoreItems == true
    ) {
      dispatch(roomPostsActions.currentPageIncreased());
      if (props.feedType == "roomFeed") {
        dispatch(roomPostsActions.setIsLoading(true));
        dispatch(
          fetchPosts({
            roomId: roomData.currentRoomId,
            postLimit: 10,
          })
        );
      } else if (props.feedType == "profileFeed") {
        dispatch(roomPostsActions.setIsLoading(true));
        dispatch(
          fetchOwnPosts({
            postLimit: 10,
          })
        );
      }
    }
  }, [postData.isLoading, postData.hasMoreItems, postData.reachedPageEnd]);
  const feedType = useSelector((data) => data.room.currentFeedType);
  return (
    <div className="my-5">
      {postData.posts.map((post) => {
        console.log(post);
        if (post) {
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
              liked={post.liked}
              disliked={post.disliked}
            />
          );
        }
      })}
    </div>
  );
};

export default Feed;
