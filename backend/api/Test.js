import asyncHandler from "express-async-handler";

export const testRoute = asyncHandler((req, res) => {
  try {
    res.json({
      status: "SUCCESS",
      message: "Test successful.",
    });
  } catch (error) {
    console.log(error);
  }
});
