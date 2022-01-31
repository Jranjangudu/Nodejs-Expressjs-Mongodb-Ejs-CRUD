import express from "express";
import route from "./routes/routes.js";
import db_connection from "./db/connection.js";
import { join } from "path";
const app = express();
const PORT = process.env.PORT || 5000;
// view engine
app.set("views", join(process.cwd(), "views"));
// set template engine
app.set("view engine", "ejs");
// use static files
app.use(express.static(join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Database connection
db_connection();
// route middleware
app.use("/", route);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
