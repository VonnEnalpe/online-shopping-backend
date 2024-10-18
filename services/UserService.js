const BlogModel = require("../models/UserModel");
// import BlogModel from "../models/UserModel";
 
exports.getAllBlogs = async () => {
  return await BlogModel.find();
};
 
exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};
exports.getBlogById = async (id) => {
  return await BlogModel.findById(id);
};
 
exports.updateBlog = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};