const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
mongoose.set('strictQuery', false);
const UserModel = new Schema({
  name: { type: String, default: "Undefine User" },
  email: { type: String, default: "Undefine User", required: true },
  // age: { type: Number, min: 18 },
  // phone: { type: Number, default: "Undefine User" },
  passward: { type: String },
  date: { type: Date, default: Date.now },
});
const MyModel = mongoose.model("ModelName", UserModel);
module.exports = MyModel
