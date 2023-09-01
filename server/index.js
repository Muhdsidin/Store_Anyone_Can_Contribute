const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3000
const db = require("./config/connections")
const Product = require("./routes/Product-route")
const User = require("./routes/User-route")

app.use(cors())
app.use(express.json())


app.use("/product",Product)
app.use("/user",User)  

app.listen(PORT, ()=> console.log(`server is running on ${PORT}`))