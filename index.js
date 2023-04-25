import express from "express";

import about from "./routes/about.js";
import contact from "./routes/contact.js";
import login from "./routes/login.js";
import register from "./routes/register.js";
import services from "./routes/services.js";
const app = express();

app.use("/about", about);
app.use("/contact", contact);
app.use("/login", login);
app.use("/register", register);
app.use("/services", services);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3600);






//params concept
// app.get("/:id/:name", (req, res) => {
//   res.send("I'm " + req.params.name + " my age is " + req.params.id);
// });

//using normal ifelse
// app.get("/:id", (req, res) => {
//   console.log(req.params.id);
//   if (req.params.id == 1) {
//     res.send("I'm a WebDeveloper");
//   } else if (req.params.id == 2) {
//     res.send("I'm a Back-end-Dveeloper");
//   } else if (req.params.id == 3) {
//     res.send("I'm a Full-stack Developer");
//   } else {
//     res.send("I'm a Noob");
//   }
// });