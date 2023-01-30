const Members = require("../Const/Members")
const MyModel = require("../Model/UserSchema");

const deleteUser = (req , res) => {
    let data = req.body;
    MyModel.deleteOne({"name":data.name},function(err){
        if(err){
            console.log(err);
        }
    })
    // Members = Members.map((i)=>{
    //     data.name !== Members[i].name
    // })
res.status(200).send({message:"Updated secussfully"})
}
module.exports = deleteUser;