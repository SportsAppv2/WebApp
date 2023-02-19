import Room from "../models/Room.js";

export const roomAuth = async (req, res, next) => {
  try {
    const userId = req.userId;
    const roomId = req.params.roomId;
    const room = await Room.findById(roomId).catch((err) => {
      return res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    if (!room) {
      return res.json({
        status: "FAILED",
        message: "Room not found",
      });
    }
    if (room.users.userList.includes(userId)) {
      req.room = room;
      next();
    } else {
      return res.json({
        status: "FAILED",
        message: "User must join the room",
      });
    }
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
};
