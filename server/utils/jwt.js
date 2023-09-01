const jwt = require("jsonwebtoken")
const SECRET_TOKEN = process.env.TOKEN || "hello-world"

const generateAccessToke = (userId)=>{
    return jwt.sign({_id:userId},SECRET_TOKEN)
}

const verifyToken = (userId)=>{
    return jwt.verify(userId, SECRET_TOKEN)
}

module.exports = {generateAccessToke , verifyToken}