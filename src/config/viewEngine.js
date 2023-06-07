import express from "express";

let configViewEngine = (app) => {
  // arrow functions
  // chỉ lấy ảnh từ thư mục public
  app.use(express.static("./src/public"));
  // tương đương file jsp trong java
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
