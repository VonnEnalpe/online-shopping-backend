const express = require("express");
// import express from "express";
// import {
//   getAllBlogs,
//   createBlog,
//   getBlogById,
//   updateBlog,
//   deleteBlog,
// } from "../services/AdminController";
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../services/AdminController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
