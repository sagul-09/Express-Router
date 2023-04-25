import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("FIND SERVICES BY ID FROM 1-4");
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
    res.send("INVALID SERVICE");
  }
});



export default route;

// route.get("/", (req, res) => {
//   res.status(200).send(res.json({ services }));
// });

// route.get("/:id", (req, res) => {
//   res.send("Get services with id: " + req.params.id);
//   console.log(req.service.name);
// });

// route.param("id", (req, res, next, id) => {
//   console.log(req.params.id);
//   req.service = services[id];
//   next();
// });