import user_model from "../model/usersSchema.js";
class users_node {
  static addUser = async (req, res) => {
    const { name, age, contact } = req.body;
    try {
      const user_data = await new user_model({ name, age, contact });
      await user_data.save();
      res.redirect("/");
    } catch (error) {
      console.log("error");
    }
  };
  static editUsers = async (req, res) => {
    const data = await user_model.findById(req.params.id);
    res.render("edit", { items: data });
  };
  static deleteUsers = async (req, res) => {
    await user_model.findByIdAndDelete(req.params.id);
    res.redirect("/");
  };
  static updateUsers = async (req, res) => {
    const { name, age, contact } = req.body;
    const options = { returnDocument: "after" };
    await user_model.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { name, age, contact }, options }
    );
    res.redirect("/");
  };
}
export default users_node;
