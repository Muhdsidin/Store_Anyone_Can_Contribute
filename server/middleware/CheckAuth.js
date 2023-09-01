const express = require("express")
const SECRET_TOKEN = process.env.TOKEN || "hello-world"
const jwt = require("jsonwebtoken")

const CheckAuth = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(400).json({
            message:"Please Login"
        })
    }

    try {
        const decode = jwt.verify(authorization,SECRET_TOKEN)
      //  console.log(decode)
        req.userId = decode._id
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {CheckAuth}