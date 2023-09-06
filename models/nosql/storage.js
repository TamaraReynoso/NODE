const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
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
StrorageScheme.plugin(mongooseDelete, { overrideMethods:'all'})
module.exports = mongoose.model("strorages",StrorageScheme)