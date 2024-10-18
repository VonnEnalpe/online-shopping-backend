// import adminService from "../services/AdminService";
const adminService = require("../services/AdminService");

exports.getAllAdminAccount = async (req, res) => {
  try {
    const allAdminAccount = await adminService.getAllAdminAccount();
    res.status.(201).json({ data: allAdminAccount, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAdminAccount = async (req, res) => {
  try {
    const admin = await adminService.createAdminAccount(req.body);
    res.status(201).json({ data: admin, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getAdminAccountById = async (req, res) => {
//   try {
//     const adminById = await adminService.getAdminAccountById(req.params.id);
//     req.json({data:})
//   } catch (err) {

//   }
// };

// exports.getBlogById = async (req, res) => {
//   try {
//     const blog = await blogService.getBlogById(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateBlog = async (req, res) => {
//   try {
//     const blog = await blogService.updateBlog(req.params.id, req.body);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteBlog = async (req, res) => {
//   try {
//     const blog = await blogService.deleteBlog(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
