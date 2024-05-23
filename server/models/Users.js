const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});

const UserModel = model("Users", UserSchema);

module.exports = UserModel;
