const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    }
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;