import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Contact me Email- sagul123@gmail.com!");
});

export default route;
