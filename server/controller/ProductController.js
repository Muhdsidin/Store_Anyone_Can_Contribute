const Product = require("../models/productModel")
const userModel = require("../models/userModel")

const GetSixProduct = async(req,res)=>{
    const Data = await Product.find().limit(6)
    //console.log(Data.length)
    res.status(200).json(Data)
}

const GetTweProduct = async(req,res)=>{
    const Data = await Product.find({prize:{$lt:1000}})
    //console.log(Data)
    res.status(200).json(Data)
}

const GetAllProduct = async(req,res)=>{
    const AllData = await Product.find()
    res.status(200).json(AllData)
    //console.log(AllData)
}

const details = async(req,res)=>{
    //console.log(req.headers.id )
    const ProductDetailsWithId = await Product.findById(req.headers.id)
    //console.log(ProductDetailsWithId)
    res.status(200)
    res.json(ProductDetailsWithId)
    }

module.exports = {GetSixProduct, GetTweProduct, GetAllProduct, details}

