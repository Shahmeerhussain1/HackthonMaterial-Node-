const Members = require("../Const/Members");
const MyModel = require("../Model/UserSchema");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().required().max(6),
});

const addUser = async (req, res) => {
  let data = req.body;

  try {
    await schema.validateAsync(data, { abortEarly: false });
    const alreadyExists = await MyModel.find({ email: data.email });
    console.log("already exists", alreadyExists.length);
    if (alreadyExists.length) {
      res.status(401).send({ msg: "User already exists" });
    } else {
      const hash = bcrypt.hashSync(data.password, 10);
      const newUser = new MyModel({
        name: data.name,
        email: data.email,
        passward: hash,
      });
      newUser.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successful");
          res.status(200).send({ msg:newUser });
        }
      });
    }
  } catch (err) {
    return res.status(401).send({
      status: 401,
      err: err,
    });
  }
};
module.exports = addUser;
