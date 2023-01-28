const Members = require("../Const/Members")

const addUser = (req,res) => {
    let data =req.body;
    // console.log(data);
    Members.push(data)
    res.status(200).send({msg : data})

}
module.exports = addUser;