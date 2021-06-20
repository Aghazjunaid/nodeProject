const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()
const port = 5000;

const User = require("./models/user")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mongoUrl = 'mongodb://127.0.0.1/ecommerceDB'
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.post("/register", (req,res) => {
    let userData = req.body;
    let user = User(userData)
    user.save(function(error,doc){
        if(error){
            res.send(String(error))
        } else{
            res.send(doc)
        }
    })
})

app.get("/user", (req,res) => {
    User.find({}, function(error,doc){
        if(error){
            res.send(String(error))
        }
        res.send(doc)
    })
})

app.get("/user/:id", (req,res) => {
    User.find({_id: req.params.id}, function(error,doc){
        if(error){
            res.send(String(error))
        }
        res.send(doc)
    })
})

app.get("/email/:id", (req,res) => {
    User.findOne({email: req.params.id}, function(error,doc){
        if(error){
            res.send(String(error))
        }
        res.send(doc)
    })
})


app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})
