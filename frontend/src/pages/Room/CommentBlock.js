import React from "react";
import ReplyBlock from "./ReplyBlock";
import Comments from "./Comments";

const CommentBlock = (props) => {
  return (
    <div className="bg-[#000000] h-fit ml-[70px] mr-8 mb-5 pb-14">
      <ReplyBlock
        postId={props.postId}
        commentId={props.commentId}
        userName={props.userName}
        dp={props.dp}
      />
      <Comments
        postId={props.postId}
        commentId={props.commentId}
        userName={props.userName}
        dp={props.dp}
      />
    </div>
  );
};

export default CommentBlock;
