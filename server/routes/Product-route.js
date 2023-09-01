const express = require("express")
const router = express.Router()
const multer = require("multer")
const upload = multer({dest:"upload/"})
const cloudinary = require("cloudinary").v2
const Product = require("../models/productModel")
const { GetSixProduct, GetTweProduct, GetAllProduct, details } = require("../controller/ProductController")
const productModel = require("../models/productModel")
const { CheckAuth } = require("../middleware/CheckAuth")
const orderModel = require("../models/orderModel")

cloudinary.config({
    cloud_name: 'desvgqarv',
    api_key: '145346287342629',
    api_secret: 'QKV7NMERDvVo5V9IOr1A0sR51yg',
  });


router.post("/upload",upload.array("file"),async(req,res)=>{
   try {
    const fileone = req.files[0];
    const filetwo = req.files[1];
    const {title , dis , prize} = req.body
    console.log(req.body)
    const uploadimgone = await cloudinary.uploader.upload(fileone.path,{
        folder:"Products-img"
    })
    

    const uploadimgtwo = await cloudinary.uploader.upload(fileone.path,{
        folder:"Products-img"
    })
 
    const uploadToDataBase = await Product.create({
        title,
        discreption:dis,
        prize,
        url: uploadimgone.url, 
        public_id : uploadimgone.public_id
    })
    const Productid = uploadToDataBase._id
    const imgOneUrl= uploadimgone.url
    const imgTwoUrl = uploadimgtwo.url
    const newImageUrls = [imgOneUrl, imgTwoUrl,]
    
    const update = await Product.findByIdAndUpdate(Productid, {
        $push: { images: { $each: newImageUrls } }
      });
 
    console.log(uploadimgone, "==one")
    console.log(uploadimgtwo,"==two");
    res.json({
        Message:"hello world"
    })
   } catch (error) {
    console.log(error)
   }
})
router.get('/get-data/6',GetSixProduct)
router.get("/get-data/12",GetTweProduct)   
router.get("/all-product",GetAllProduct)
router.get("/details",details) 

router.delete("/delete-product", async(req,res)=>{
    console.log(req.body.ProId)
    const DeleteProd = await productModel.findByIdAndDelete(req.body.ProId)
    console.log(DeleteProd.public_id)
    cloudinary.uploader.destroy(DeleteProd.public_id,(err,client)=> console.log(client))
    const result = await productModel.find()
    res.status(200)
    res.json(result)
})

router.get("/get-order-product",CheckAuth,async(req,res)=>{//order cheyyan ulley page lek data ethikunnu
    console.log(req.userId, req.headers.id)
    const product = await productModel.findById(req.headers.id)
    console.log(product)
    res.status(200).json(product)
})

router.get("/admin-order-list",async(req,res)=>{
    const getItem = await orderModel.find().populate('productId').populate('userId')
   // const getuser = await orderModel.find().populate('order.userId')
    console.log(getItem)
    res.status(200).json(getItem)
}) 


module.exports =router 
