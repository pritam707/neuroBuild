const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        sno: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        mobile: {
            type: Number
        },
        age: {
            type: Number
        },
        designation: {
            type: String,
        },
        gender: {
            type: String
        }

    },
    { versionKey: false, strict: false, timestamps: true },
);
module.exports = mongoose.model("user", userSchema);
