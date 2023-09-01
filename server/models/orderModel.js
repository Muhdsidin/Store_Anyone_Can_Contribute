const mongoose = require("mongoose")

const OrderModel = new mongoose.Schema({
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        productId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        payment:{
            type:String,
            require:true
        }
})

module.exports = mongoose.model("Order", OrderModel)