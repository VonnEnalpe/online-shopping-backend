const AdminModel = require("../models/AdminModel");
// import AdminModel from "../models/AdminModel";

exports.getAllAdminAccount = async () => {
  return await AdminModel.find();
};
exports.createAdminAccount = async (admin) => {
  return await AdminModel.create(admin);
};

exports.getAdminAccountById = async (id) => {
  return await BlogModel.findById(id);
};
