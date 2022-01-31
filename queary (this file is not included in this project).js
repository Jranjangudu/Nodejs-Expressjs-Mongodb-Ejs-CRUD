import mongoose from "mongoose";
// create Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  address: { type: String },
  contact: { type: Number, required: true, minlength: 10, maxlength: 10 },
  email: { type: String, required: true, unique: true },
});

// model

const users = mongoose.model("users", userSchema);

const insertData = async (name, age, address, contact, email) => {
  try {
    const user = await new users({ name, age, address, contact, email });
    const res = await user.save();
    console.log(res);
  } catch (error) {
    console.log("Error occure");
  }
};
const findUser = async () => {
  // const res = await users.find().sort({age:1});// sort in assending order
  // const res = await users.find().sort({age:-1}); // sort in decending order
  // const res = await users.find({}, {name:1 , age :1 , _id:0},{limit:4 , sort:1 , skip:2});
  const res = await users.find();
  console.log(res);
};
const searchByName = async (name) => {
  const regex = new RegExp(name, "i");
  const res = await users.find({ name: { $regex: regex } });
  console.log(res);
};
const Update = async () => {
  const options = { returnDocument: "after" }; // it give the output , current update value ,
  const res = await users.findByIdAndUpdate(
    { _id: "61f68a422542faa1632525534" },
    { $set: { name: "Ziva" }, options }
  );
  console.log(res);
};
const UpdateMany = async () => {
  const options = { returnDocument: "after" }; // {after } means current update value and{befor} means previous value
  const res = await users.findByIdAndUpdate(
    { _id: "61f68a422542faa16ec2354" },
    { $set: { name: "Guddu", age: 23, contact: 9889676567 }, options }
  );
  console.log(res);
};
const Delete = async () => {
  const res = await users.findByIdAndDelete({
    _id: "61f6843rte4c045be9a68d7",
  });
  console.log(res);
};
export { insertData, findUser, Update, Delete, searchByName, UpdateMany };
