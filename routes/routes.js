import express from "express";
import users_node from "../controllers/user_controllers.js";
import user_model from "../model/usersSchema.js";
const route = express.Router();
route.get("/", async (req, res) => {
  const data = await user_model.find();
  res.render("Home", { data });
});
route.post("/posts", users_node.addUser);
route.get("/edit/:id", users_node.editUsers);
route.get("/delete/:id", users_node.deleteUsers);
route.post("/edit/:id/update", users_node.updateUsers);
export default route;
