const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : String,
    brandName : String,
    category : String,
    productImage : [],
    description : String,
    price : Number,
    sellingPrice : Number,
    speed: Number,
    mileage: Number,
    charging: Number
},{
    timestamps : true
})

const productModel = mongoose.model("product",productSchema)

module.exports = productModel