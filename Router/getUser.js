const Members = require("../Const/Members")


const getUser = (req,res) => {
res.status(200).json({msg : Members})
}
module.exports = getUser;