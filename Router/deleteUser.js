const Members = require("../Const/Members")

const deleteUser = (req , res) => {
    let data = req.body;
    Members = Members.map((i)=>{
        data.name !== Members[i].name
    })
res.status(200).send({message:"Updated secussfully"})
}
module.exports = deleteUser;