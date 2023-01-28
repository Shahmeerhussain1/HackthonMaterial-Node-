const Members = require("../Const/Members")


const UpdateUser = (req,res) => {
    let data = req.body ;
    Members[data._id].Age = data.Age ;
    res.status(200).send({message : "Updated Successfully"})

}
module.exports = UpdateUser;