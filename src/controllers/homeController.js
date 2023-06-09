import db from "../models/index";
import CRUDService from "../servers/CRUDService";
import createNewUser from "../servers/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("--------------------------------");
    console.log(data);
    console.log("--------------------------------");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let messenge = await CRUDService.createNewUser(req.body);
  console.log(messenge);
  return res.send("post crud from server");
};

// objecctK{key,value}
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
