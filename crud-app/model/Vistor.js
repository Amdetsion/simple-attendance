const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vistorSchema = new Schema({
    vistorFname: {
      type: String,
      required: true,
    },
    vistorLname: {
        type: String,
        required: true,
      },
    phonNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    
    gender:{
      type: String,
      required: true,
    },
    
    
    
  });
  
  module.exports = mongoose.model("Vistor", vistorSchema);