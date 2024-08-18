// import
const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// export model
module.exports = mongoose.model("User", userSchema);
