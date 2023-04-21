const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/vistor-routes");
const PORT=80
const path = require('path');
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use("/attendance", router); // localhost:5000/companies
app.use(express.static('interface/index'))

app.get('/getData',function(req,res){
res.status(200).send({
  sucess:"true",
  name:"amded load",
  response:"Working"
})

})
mongoose
  .connect(
    "mongodb://192.168.1.2:27017/attendance"
  )
  .then(() => console.log("Amdetsion To Database on port 80"))


app.listen(80,'0.0.0.0');
if (process.env.NODE_ENV === 'devlopment') {
  // Set static folder
  app.use(express.static('interface'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'interface',  'index.js'));
  });
}
  
