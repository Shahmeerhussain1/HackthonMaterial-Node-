const Members = require("../Const/Members");
const MyModel = require("../Model/UserSchema");

const getUser = (req, res) => {
  MyModel.find({}, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
    res.status(200).json({ "Users": kittens });
  });
};
module.exports = getUser;
