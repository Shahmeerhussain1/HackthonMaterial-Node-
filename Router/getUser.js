const Members = require("../Const/Members");
const MyModel = require("../Model/UserSchema");

const getUser = (req, res) => {
//   MyModel.findOne(
//     {
//       name: "AwanZada",
//     },
//     function (err, docs) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(docs);
//       }
//     }
//   );
  res.status(200).json({ msg: Members });
};
module.exports = getUser;
