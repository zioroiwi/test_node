import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashUserPasswordBrcypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashUserPasswordBrcypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender === "1" ? "true" : "false",
        roleId: data.roleId,
      });
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashUserPassword = await bcrypt.hashSync(password, salt);
      resolve(hashUserPassword);
    } catch (error) {
      reject(e);
    }
  });
};

let getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
};
