const Members = require("../Const/Members");
const myModel = require("../Model/UserSchema");

const UpdateUser = (req, res) => {
  let data = req.body;
  myModel.updateOne(
    { name: "AwanZada" },
    { $set: { email: data.email } },
    function (err) {
      if (err) {
        console.log("done task");
      }
    }
  );
  // Members[data._id].Age = data.Age ;
  res.status(200).send({ message: "Updated Successfully" });
};
module.exports = UpdateUser;
