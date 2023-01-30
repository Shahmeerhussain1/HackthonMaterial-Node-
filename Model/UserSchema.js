const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserModel = new Schema({
  name: { type: String, default: "Undefine User" },
  email: { type: String, default: "Undefine User", required: true },
  // age: { type: Number, min: 18 },
  // phone: { type: Number, default: "Undefine User" },
  passward: { type: Number, min: 6 },
  date: { type: Date, default: Date.now },
});
const MyModel = mongoose.model("ModelName", UserModel);
module.exports = MyModel
