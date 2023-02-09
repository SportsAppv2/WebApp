import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Post from "../../models/Posts.js";

const router = express.Router();
export const deletePost = asyncHandler(async (req, res) => {
  try {
    const jwtToken = req.headers.authorization.split(" ")[1];
    const userId = decodeJwt(jwtToken);

    const postId = req.params.id;
    console.log("User ID is ", userId);
    console.log("Post ID is ", postId);

    Post.findById(postId)
      .then((post) => {
        if (!post) {
          return res
            .status(404)
            .json({ status: "FAILED", message: "Post not found." });
        }

        if (post.creator.id !== userId) {
          console.log("Request not authorized");
          return res
            .status(401)
            .json({ status: "FAILED", message: "Unauthorized request." });
        } else {
          post
            .remove()
            .then((post) => {
              console.log("Deleted Post ", post);
              return res
                .status(200)
                .json({ message: "Post deleted successfully" });
            })
            .catch((error) => {
              res.json({
                status: "FAILED",
                message: error.message,
              });
            });
        }
      })
      .catch((error) => {
        res.json({
          status: "FAILED",
          message: error.message,
        });
      });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
