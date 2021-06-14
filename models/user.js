const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
}, { timestamps : true })

User = mongoose.model("user", UserSchema)

module.exports = User