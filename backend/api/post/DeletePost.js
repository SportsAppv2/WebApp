import express from "express";
import asyncHandler from "express-async-handler";
import Post from "../../models/Posts.js";

const router = express.Router();

const decodeJwt = (token) => {
  /* 
    Here instead of userId, we will receive the JWT. 
    On decoding the JWT, we will receive the userId.
    */
};
export const deletePost = asyncHandler(async (req, res) => {
  try {
    // const jwtToken = req.headers.authorization.split(" ")[1];
    // const userId = decodeJwt(jwtToken);
    const userId = req.headers.authorization.split(" ")[1]; //use JWT, remove this

    const postId = req.params.id;
    console.log("User ID is ", userId);
    console.log("Post ID is ", postId);

    Post.findOne({ _id: postId })
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
