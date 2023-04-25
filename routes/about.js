import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello i'm Sagul from SEC!");
});



export default route;
