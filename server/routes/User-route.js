const express = require("express")
const userModel = require("../models/userModel")

const router = express.Router()
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const { generateAccessToke } = require("../utils/jwt")
const jwt = require("jsonwebtoken")
const { CheckAuth } = require("../middleware/CheckAuth")
const orderModel = require("../models/orderModel")
const SECRET_TOKEN = process.env.TOKEN || "hello-world"

router.post("/signup", async(req,res)=>{
    console.log(req.body)
    const {email , password , username , mobile , address } = req.body
    const HashedPassword =await bcrypt.hash(password , 10)
    const Upload = await userModel.create({
        Email:email,
        Password:HashedPassword,
        username,
        Mobile:mobile, 
        address
    })
    console.log(Upload)
    res.status(200).json({
        message:"You SuccessFully Signuped"
    })
})

router.post("/login",async(req,res)=>{
    console.log(req.body)
    const {email , password} = req.body
    const user = await userModel.findOne({Email:email})
    if(!user){
        return res.status(400).json({
            message: " email/password was wrong"
        })
    }
    const veryfiPassword = await bcrypt.compare(password,user.Password)
    if(!veryfiPassword){
        return res.status(400).json({
            message:"Email/password is wrong"
        })
    }

    const AccessToken = generateAccessToke(user._id)
    console.log(AccessToken)
    const Data = {
        userId : user._id,
        Token : AccessToken
    }
    res.status(200).json(Data)

})

router.get('/get-user',async(req,res)=>{
    const userdetails = await userModel.find()
    res.status(200)
    res.json(userdetails)
})

router.delete("/delete-user", async(req,res)=>{
    console.log(req.body)
    const  deletedUser = await userModel.findByIdAndDelete(req.body.userId,{new : true}) 
    const newuser = await userModel.find()
    res.status(200)
    res.json(newuser)
})

router.post("/admin-add-user",async (req,res)=>{
    console.log(req.body)
    const {email , password , username , mobile , address } = req.body
    const HashedPassword =await bcrypt.hash(password , 10)
    const Upload = await userModel.create({
        Email:email,
        Password:HashedPassword,
        username,
        Mobile:mobile,
        address
    })
    console.log(Upload)
    res.status(200).json({
        message:"You SuccessFully Created User"
    })
  
})
 
router.post("/add-to-cart",async(req,res)=>{
    const {proId } = req.body
    const {authorization } = req.headers
    const verifyToken = jwt.verify(authorization,SECRET_TOKEN)
    const userId = verifyToken._id
   const user = await userModel.findById(userId)
   if(!user){
    return res.status(400).json({
        message:"USer is Not Found"
    })
   }
   user.cart.push({
    productId:proId
   })

   await user.save();
   // console.log(PushCart)
    res.status(200).json({
        message:"Succesfully Added" 
    })
    
    
})

router.get("/get-cart-item", async(req,res)=>{
    const {proId } = req.body
    const {authorization } = req.headers
    const verifyToken = jwt.verify(authorization,SECRET_TOKEN)
    const userId = verifyToken._id
    console.log(userId)
    const user = await userModel.findById(userId).populate('cart.productId').select("cart")
   /* if(!user){
        return res.status(400).json({
            message:"user Is Not Found"
        })
    }*/
    
    console.log(user);
    console.log()
    res.status(200).json(user)
})

router.post("/remove-cart-item",CheckAuth,async(req,res)=>{
    console.log(req.body, req.userId)
    const user = await userModel.findById(req.userId)
    if(!user){
        return res.status(400).json({
            message:"user is not found"

        })
    }

    user.cart.splice(req.body.proId, 1)
    await user.save()
    const pop= await userModel.findById(req.userId).populate("cart.productId")
    res.status(200).json(pop)
}) 

router.post("/conform-order",CheckAuth,async(req,res)=>{
    console.log(req.body , req.userId)
    const newOrder = {

            productId : req.body.proId ,
            userId : req.userId,
            payment: req.body.payment

    };
    const adminvieworder = await orderModel.create(newOrder)
   const user = await userModel.findById(req.userId)
   if(!user){
    return res.status(400).json({
        message:"user Is Not Found"
    })
   }

   await user.OrderItem.push({
    productId: req.body.proId
   })

   user.save()
   console.log(adminvieworder)
    res.status(200).json({
        message:"succesfully Orderd"
    })
})

router.get("/get-user-orders",CheckAuth,async(req,res)=>{
    console.log(req.userId)
    const populateDatas = await userModel.findById(req.userId).populate("OrderItem.productId").select("OrderItem")
    console.log(populateDatas)
    res.status(200).json(populateDatas)
})

module.exports = router 