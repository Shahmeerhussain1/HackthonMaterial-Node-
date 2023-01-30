const { default: mongoose } = require("mongoose");
const Members = require("../Const/Members");
const MyModel = require("../Model/UserSchema");

const addUser = (req, res) => {
  let data = req.body;
  const newUser = new MyModel({
    name: data.name,
    email: data.email,
    // age: data.age,
    // phone: data.phone,
    passward: data.passward,
  });
  newUser.save(function(err){
    if(err){
        console.log(data)
    }
    else{
        console.log("error occured")
    }
  })
  // console.log(data)
  Members.push(data);
  res.status(200).send({ msg: data });
};
module.exports = addUser;
