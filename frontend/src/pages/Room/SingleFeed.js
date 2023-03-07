import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { BiCommentDetail, BiBookmark, BiDotsVertical } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { timeFormatter } from "../../helpers/timeFormatter";
import { roomPostsActions } from "../../store/roomPostsSlice";
import { roomActions } from "../../store/roomSlice";
import CommentBlock from "./CommentBlock";
import MoreOptions from "./MoreOptions";

const SingleFeed = (props) => {
  const data = useSelector((state) => state.room);
  const postData = useSelector((state) => state.roomposts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const votes = useRef("");
  const [showComments, setShowComments] = useState(false);
  const [vote, setVote] = useState("");
  const [voteCount, setVoteCount] = useState(props.upvotes - props.downvotes);
  const [moreOptions, setMoreOptions] = useState(false);
  useEffect(() => {
    if (props.liked == true) {
      setVote("like");
    } else if (props.disliked == true) {
      setVote("dislike");
    }
  }, []);
  const postId = props.postId;
  const jwtToken = localStorage.getItem("token");
  const handleLike = async (postId) => {
    console.log("Current state is ", voteCount);
    if (vote == "dislike") {
      setVoteCount((voteCount) => voteCount + 2);
      votes.current.innerHTML = voteCount + 2;
    } else {
      setVoteCount((voteCount) => voteCount + 1);
      votes.current.innerHTML = voteCount + 1;
    }
    setVote("like");
    const data = {
      postId: props.postId,
    };
    const response = await axios
      .post("http://localhost:5000/api/home/post/like/", JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "SUCCESS") {
          console.log("Successfully liked the post ", voteCount);
        } else {
          votes.current.innerHTML = voteCount;
          setVote("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDislike = async (postId) => {
    console.log("Current state is ", voteCount);
    if (vote == "like") {
      setVoteCount((voteCount) => voteCount - 2);
      console.log(voteCount);
      votes.current.innerHTML = voteCount - 2;
    } else {
      setVoteCount((voteCount) => voteCount - 1);
      votes.current.innerHTML = voteCount - 1;
    }
    setVote("dislike");
    const data = {
      postId: props.postId,
    };
    const response = await axios
      .post(
        "http://localhost:5000/api/home/post/dislike/",
        JSON.stringify(data),
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "SUCCESS") {
          console.log("Successfully disliked the post", voteCount);
        } else {
          votes.current.innerHTML = voteCount;
          setVote("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="text-white-50 text-[20px] relative">
      <div className="flex py-5">
        <div className="w-1/12 mr-1">
          <div className="flex-col m-auto">
            <img
              src={
                props.dp
                  ? props.dp
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBBHpIKwwDXQrCf_lf4prJHLrddzCt0lWGfXlZKyJmw&s"
              }
              alt="DP"
              className="rounded-[500px] w-[50px] h-[50px] object-cover  m-auto"
            />
            {data.showComments && (
              <div className="w-[1px] absolute left-[45px] bg-gray-600 h-[100%]"></div>
            )}
          </div>
        </div>
        <div className="w-9/12 mr-5">
          <div className="flex justify-between">
            <div
              className="flex cursor-pointer"
              onClick={() => {
                navigate(`/profile/${props.userName}`);
              }}
            >
              <div className="font-bold">{props.name}</div>
              <div className="italic mx-2 text-gray-600">@{props.userName}</div>
            </div>
            <div className="font-thin text-[16px] text-gray-600">
              {timeFormatter(props.time)}
            </div>
          </div>
          <div
            className="text-[18px] cursor-pointer"
            onClick={() => {
              dispatch(
                roomPostsActions.setFeedScroll(postData.scroll.overallScroll)
              );
              dispatch(roomPostsActions.togglePostEnlarged(true));
              console.log("Clicked ", props);
              dispatch(roomPostsActions.setEnlargedPost(props));
              navigate(`post/${props.postId}`);
            }}
          >
            <div className="contentText">{props.textContent}</div>
            <div className="contentImg">
              <img src="" alt="" />{" "}
            </div>
          </div>
          <div className="flex mt-3 text-gray-600 font-medium">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                setShowComments(!showComments);
              }}
            >
              <BiCommentDetail />
              <div className="comments text-[16px] ml-2">
                {props.totalComments} comments
              </div>
            </div>
            <div className="flex items-center mx-5">
              <AiOutlineShareAlt />
              <div className="share text-[16px] ml-2">Share</div>
            </div>
            <div className="flex items-center mx-3">
              <BiBookmark />
              <div className="save text-[16px] ml-2">Save</div>
            </div>
            <div className="flex items-center mx-3 relative">
              <BiDotsVertical
                className="cursor-pointer hover:text-[white] transition-all"
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
              />
              {moreOptions && (
                <MoreOptions postId={props.postId} userId={props.userId} />
              )}
            </div>
          </div>
        </div>
        <div className="w-2/12  text-gray-600 text-center">
          <div className="likes mt-5">
            <div className="w-fit m-auto">
              {vote == "like" ? (
                <AiFillLike className="text-[#c95353]" />
              ) : (
                <AiOutlineLike
                  className="cursor-pointer"
                  onClick={() => {
                    handleLike();
                  }}
                />
              )}
            </div>
            <div className="text-[18px] my-3" ref={votes}>
              {props.upvotes - props.downvotes}
            </div>
          </div>
          <div className="dislikes">
            <div className="w-fit m-auto">
              {vote == "dislike" ? (
                <AiFillDislike className="text-[#c95353]" />
              ) : (
                <AiOutlineDislike
                  className="cursor-pointer"
                  onClick={() => {
                    handleDislike();
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {showComments && (
        <CommentBlock
          postId={props.postId}
          commentId=""
          userName={props.userName}
          dp={props.dp}
        />
      )}
      <hr className="bg-gray-600 border-none h-[1px] w-[75%] ml-[70px]" />
    </div>
  );
};

export default SingleFeed;
