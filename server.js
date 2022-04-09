const express = require('express')
const cors = require("cors")
const posts = require("./data")
require('dotenv').config()

const app = express();

app.use(cors());
app.get("/", function (req,res){
    res.send("Welcome to Luan Nguyen backend")
})
app.get('/posts', (req, res) => {
    const {s} = req.query;
    let searchPosts = posts.filter((item) => item.title.includes(s))
    res.json(searchPosts)    
})
app.get("/posts/:id", (req, res) => {
    const {id} = req.params;
    let post = posts.find((item) => parseInt(item.id) === parseInt(id))
    res.json(post)
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