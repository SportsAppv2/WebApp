import express from "express";
import { testRoute } from "../api/auth/Test.js";
const router = express.Router();
import { resendOtp, signupRoute, verifyOtp } from "../api/auth/User.js";
import { createComment } from "../api/post/CreateComment.js";
import { createPost } from "../api/post/CreatePost.js";
import { deleteComment } from "../api/post/DeleteComment.js";
import { deletePost } from "../api/post/DeletePost.js";
import { dislikeComment } from "../api/post/DislikeComment.js";
import { dislikePost } from "../api/post/DislikePost.js";
import { getComments } from "../api/post/GetComments.js";
import {
  getPost,
  getPosts,
  getPostsOwn,
  getProfilePost,
} from "../api/post/GetPosts.js";
import { likeComment } from "../api/post/LikeComment.js";
import { likePost } from "../api/post/LikePost.js";
import { isAccountSetupDone } from "../middleware/accountSetupVerify.js";
import protect from "../middleware/authVerify.js";
import { roomAuth } from "../middleware/roomAuth.js";
router.use(protect);
router.use(isAccountSetupDone);
router.route("/test").post(testRoute);
router.route("/post/create").post(createPost);
router.route("/post/:id").delete(deletePost);
router.route("/post/like").post(likePost);
router.route("/post/dislike").post(dislikePost);
router.route("/post/:postId").get(getPost); //Get details of a particular post
router.route("/post/get/").get(getPostsOwn);
router.route("/post/get/:userName").get(getProfilePost);
// router.route("/post/save").post(savePost);
router.route("/comment/create").post(createComment);
router.route("/comment/like").post(likeComment);
router.route("/comment/dislike").post(dislikeComment);
router.route("/comment/:id").delete(deleteComment);
router.route("/rooms/:roomId/posts").get(roomAuth, getPosts);
router.route("/rooms/:postId/comments/:commentId?").get(getComments);
export default router;
