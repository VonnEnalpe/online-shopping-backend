const express = require("express");
// import express from "express";
// import {
//   getAllAdminAccount,
//   createAdminAccount,
// } from "../controllers/AdminController";
const {
  getAllAdminAccount,
  createAdminAccount,
  //   getBlogById,
  //   updateBlog,
  //   deleteBlog,
} = require("../controllers/AdminController");

const router = express.Router();

router.route("/").get(getAllAdminAccount).post(createAdminAccount);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
