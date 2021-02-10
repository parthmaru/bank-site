const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  accountType: String,
  balance: Number,
});

module.exports = mongoose.model("users", UserSchema);
