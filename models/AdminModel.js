const mongoose = require("mongoose");
// import mongoose from "mongoose";
const {Schema} = mongoose;

const adminSchema = new Schema({
  firstName: {
    type: String,
    // required: true,
  },
  
  lastName: {
    type: String,
    // required: true,
  },

  email: {
    type: String,
    // required: true,
    // unique: true,
  },

  loginId: {
    type: String,
    // required: true,
    // unique: true,
  },

  password: {
    type: String,
    // required: true,
  },

  confirmPassword: {
    type: String,
    // required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("online_shopping_nodejs_db", adminSchema);
