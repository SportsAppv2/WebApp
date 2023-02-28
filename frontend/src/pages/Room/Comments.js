import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, roomComments } from "../../store/roomCommentsSlice";
import SingleComment from "./SingleComment";

const Comments = (props) => {
  const commentSliceData = useSelector((state) => state.roomcomments);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [commentsData, setcommentsData] = useState([]);
  const fetchComments = async () => {
    await axios
      .get(
        `http://localhost:5000/api/home/rooms/${props.postId}/comments/${
          props.commentId ? props.commentId + "/" : ""
        }?page=${pageNumber}&limit=${10}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setcommentsData(res.data.data);
        console.log("Comments data is ", commentsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchComments();
    return () => {};
  }, [pageNumber]);
  useEffect(() => {
    console.log(
      "Inside the useEffect hook ",
      commentSliceData.newComment,
      commentSliceData.commentedPostId,
      props.postId,
      commentSliceData.commentedCommentId,
      props.commentId
    );
    if (
      commentSliceData.newComment &&
      commentSliceData.commentedPostId == props.postId &&
      commentSliceData.commentedCommentId == props.commentId
    ) {
      setcommentsData((commentsData) =>
        commentsData.concat(commentSliceData.postedComment)
      );
      dispatch(roomComments.toggleNewComment(false));
    }
  }, [commentSliceData.newComment]);
  return (
    <div>
      {commentsData.map((comment) => {
        return (
          <SingleComment
            key={comment._id + comment.parentPostId}
            commentId={comment._id}
            postId={comment.parentPostId}
            parentCommentId={comment.parentCommentId}
            dp={comment.creator.profilePic || props.dp}
            name={comment.creator.firstName + " " + comment.creator.lastName}
            userName={comment.creator.userName}
            userId={comment.creator.id}
            time={comment.stats.createdAt}
            textContent={comment.content.text}
            upvotes={comment.stats.upvotes.count}
            downvotes={comment.stats.downvotes.count}
            totalComments={comment.comments.count}
            imageUrl={comment.content.image}
            videoUrl={comment.content.video}
            liked={comment.liked}
            disliked={comment.disliked}
          />
        );
      })}
      <div
        className="text-[#5D5FEF] ml-8 mt-5 cursor-pointer hover:underline text-[18px]"
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        view more
      </div>
    </div>
  );
};

export default Comments;
