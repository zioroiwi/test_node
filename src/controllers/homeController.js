import db from "../models/index";

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

// objecctK{key,value}
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
