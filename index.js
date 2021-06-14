const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const User = require("./models/user");

const app = express()
const port = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/node-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post('/signup', (req, res) => {
    let opt = req.body
      let user = new User(opt);
      user.save(function(error, doc){
        if(error) {
          res.send(String(error))
        }
        res.send(doc);
      })
    });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})