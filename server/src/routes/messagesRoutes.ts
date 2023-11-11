import express from "express";

const messagesRouter = express.Router();

messagesRouter.route("/").get(async (req, res) => {
  res.end("messages");
});

export default messagesRouter;
