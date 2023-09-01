const mongoose = require("mongoose")
const URL = process.env.URL || "mongodb://127.0.0.1:27017/NEXSTORE"
const connection = mongoose.connect(URL)
console.log(`server is connnetcet on this PORT : ${URL}`)

module.exports = connection