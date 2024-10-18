const express = require("express");
// import express from 'express'
const mongoose = require("mongoose");
// import mongoose from 'mongoose';
const adminRouter = require("./routes/AdminRoutes");
// import {adminRouter} from '../controllers/AdminController';
const app = express();

mongoose.connect('mongodb://localhost:27017/online_shopping_nodejs_db');
// app.use("/api/blogs", blogRouter);
app.use("/api/shopping", adminRouter);
app.listen(3001, ()=>{
  console.log('Server is running')
})

// sql.ConnectionError(config, function(err){
//   if(err){
//     console.log(err);
//   }
//   var request

// })

// //Register as new customer /shopping/register(POST)
// app.post("/shopping/register", (res, req) => {
//   res.send("Hello World");
// });

// // Login  /shopping/login(GET)
// app.get("/shopping/login", (res, req) => {
//   res.send("Hello World");
// });

// // Forgot password  /shopping/<customername>/forgot(GET)
// app.get("/shopping/register", (res, req) => {
//   res.send("Hello World");
// });

// // view all products  /shopping/products(GET)
// app.get("/shopping/products", (res, req) => {
//   res.send("Hello World");
// });

// // search by product name /shopping/products/search/productname(GET)
// app.get("/shopping/products/search", (res, req) => {
//   res.send("Hello World");
// });

// // add any new product /shopping/<productname>/add(POST)
// app.post("/shopping/register", (res, req) => {
//   res.send("Hello World");
// });

// // update product status /shopping/<productname>/update/<id>(PUT)\
// app.put("/shopping/register", (res, req) => {
//   res.send("Hello World");
// });

// // delete product /shopping/<productname>/delete/<id>(DELETE)
// app.delete("/shopping/register", (res, req) => {
//   res.send("Hello World");
// });

// app.listen(port, function () {
//   console.log("Server is running");
// });
