const express = require("express");
const router = express.Router();
 const addUser = require('./AddUser')
 const getUser = require('./getUser')
 const delUser = require('./deleteUser')
 const UpdateUser = require('./UpdateUser')


router.route("/getUser").get(getUser)
router.route("/postUser").post(addUser)
router.route("/updateUser").patch(UpdateUser)
router.route("/deleteUser").delete(delUser)




 

module.exports = router ;
