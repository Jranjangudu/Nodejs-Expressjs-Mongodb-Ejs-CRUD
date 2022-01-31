import mongoose from "mongoose";
// creating Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  contact: { type: Number, required: true, minlength: 10, maxlength: 10 },
  age: { type: Number, required: true, min: 18, max: 60 },
});
// model
const user_model = mongoose.model("users", userSchema);
export default user_model;
