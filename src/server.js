import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoute from "./route/web.js";
require("dotenv").config();
import connectDB from "./config/connectDB.js";

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

connectDB();

let port = process.env.PORT || 3000;
// nếu chưa khai báo port trong file .env thì sẽ sử dụng port 3000
app.listen(port, () => {
  // callback
  console.log(`Server running on port ${port}`);
});
