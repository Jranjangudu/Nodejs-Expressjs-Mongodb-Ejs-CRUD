import mongoose from "mongoose";

const dbConnection = async () => {
  const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect("mongodb://localhost:27017/users", option);
    console.log("connection successfully..");
  } catch (error) {
    console.log("unable to connect.");
  }
};
export default dbConnection;
