import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { timeFormatter } from "../../helpers/timeFormatter";
import { fetchPost, roomPostsActions } from "../../store/roomPostsSlice";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { BiCommentDetail, BiBookmark, BiDotsVertical } from "react-icons/bi";
import MoreOptions from "../../pages/Room/MoreOptions";
import axios from "axios";
import CommentBlock from "../../pages/Room/CommentBlock";
import { IoArrowBackOutline } from "react-icons/io5";

const PostEnlarged = () => {
  const postData = useSelector((state) => state.roomposts);
  const props = postData.enlargedPost;
  const data = useSelector((state) => state.room);
  const { postId } = useParams();
  console.log("POST ID IS ", postId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const votes = useRef("");
  const [showComments, setShowComments] = useState(false);
  const [moreOptions, setMoreOptions] = useState(false);
  const [vote, setVote] = useState("");
  const [voteCount, setVoteCount] = useState(props.upvotes - props.downvotes);
  const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
  console.log("BASE URL from process.env is ", BASE_URL);
  //   const postId = props.postId;
  const jwtToken = localStorage.getItem("token");
  useEffect(() => {
    if (Object.keys(props).length === 0) {
      console.log("PROPS IS EMPTY", postId);
      dispatch(fetchPost({ postId }));
    } else {
      setShowComments(true);
    }
  }, [props]);
  useEffect(() => {
    console.log("Props is ", postData.enlargedPost);
  }, [postData.enlargedPost]);
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
      .post(`${BASE_URL}/api/home/post/like/`, JSON.stringify(data), {
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
      .post(`${BASE_URL}/api/home/post/dislike/`, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
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
  useEffect(() => {
    if (props.liked == true) {
      setVote("like");
    } else if (props.disliked == true) {
      setVote("dislike");
    }
  }, []);
  return (
    <div className="w-full h-full">
      <div
        className="w-fit h-fit cursor-pointer text-white-30 flex items-center text-[28px] hover:underline"
        onClick={() => {
          console.log(postData.postEnlarged);
          if (postData.postEnlarged) {
            dispatch(roomPostsActions.toggleRefreshFeed(false));
            navigate(-1);
          } else {
            navigate(`/home/room/${props.roomId}`);
          }
        }}
      >
        <span className="bg-gray-500 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[32px] mx-3 my-4 hover:bg-gray-400">
          <IoArrowBackOutline className="" />
        </span>
        <span>Back to {props.roomName}</span>
      </div>
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
                <div className="italic mx-2 text-gray-600">
                  @{props.userName}
                </div>
              </div>
              <div className="font-thin text-[16px] text-gray-600">
                {timeFormatter(props.time)}
              </div>
            </div>
            <div className="text-[18px] cursor-pointer">
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
    </div>
  );
};

export default PostEnlarged;
