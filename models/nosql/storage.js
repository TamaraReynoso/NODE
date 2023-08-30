const mongoose = require("mongoose");

const StrorageScheme = new mongoose.Schema(
{
url:{
    type:String,
},
filename:{
    type:String,
},
},
{
timestamps:true, 
versionKey:false 
}
);

module.exports = mongoose.model("strorages",StrorageScheme)