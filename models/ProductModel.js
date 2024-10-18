const mongoose = require("mongoose");
// import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
    unique: true,
  },

  features: {
    type: String,
    required: true,
    unique: true,
  },

  productStatus: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("online_shopping_nodejs_db", productSchema);
