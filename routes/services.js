import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("FIND SERVICES BY ID");
});

let listServices = [
  {
    id: 1,
    services: "Web Development",
  },

  {
    id: 2,
    services: "Software Development",
  },

  {
    id: 3,
    services: "Ethical Hacking",
  },

  {
    id: 4,
    services: "App development",
  },
];

route.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const output = listServices.find((items) => items.id === id);

  if (output) {
    res.send("The Service required is from the " +"'"+output.services+"'"+ " Domain");
  } else {
    res.send(500);
  }
});

export default route;
