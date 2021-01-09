const mongoose = require("mongoose");
const validator =require("validator");


const addSchema = mongoose.Schema({
    name : {
        type: String,
        required:true
        
    },
    
    email: {
          type:String,
          required:true,
         
          },
    gender:{
        type:String,
        
    },
    status:{
        type:String
    }
   
   


})

//we will create a new collection

 const Add = mongoose.model('Add',addSchema);

 module.exports=Add;
