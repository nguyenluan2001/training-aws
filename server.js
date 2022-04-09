const express = require('express')
require('dotenv').config()

const app = express();


app.get("/", function (req,res){
    res.send("Welcome to Luan Nguyen backend")
})
app.get("/test", (req,res) => {
    res.json({
        id: 1,
        username: 'nguyen thanh luan',
        age: '21'
    })
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`)
})