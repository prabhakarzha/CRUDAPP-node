const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crudnode",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessful");
}).catch(()=>{
    console.log(error);
})