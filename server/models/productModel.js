const mongoose = require("mongoose")
const ProductModel = new mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    discreption:{
        type:String,
        require:true
    },
    prize:{
        type:Number,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    public_id:{
        type:String,
        require:true
    },
    images:[
       
    ]
})

module.exports = mongoose.model("Product", ProductModel)