import db from "../models/index";
import CRUDService from "../services/CRUDService";
import createNewUser from "../services/CRUDService";

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
  let allUsers = await CRUDService.createNewUser(req.body);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  console.log("--------------------------------");
  console.log(data);
  console.log("--------------------------------");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("editcrud.ejs", {
      userData: userData,
    });
  } else {
    return res.send("Not Found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  await CRUDService.updateUserInfo(data);
  return res.redirect("/get-crud");
};

let deleteCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    await CRUDService.deleteUserById(userId);
    return res.redirect("/get-crud");
  } else {
    return res.send("Not Found");
  }
};

// objecctK{key,value}
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
