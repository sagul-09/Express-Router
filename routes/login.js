import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Login here!");
});

export default route;
