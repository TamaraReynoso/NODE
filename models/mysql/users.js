const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");

const User = sequelize.define(
"users",
{
name:{
    type:Datatypes.STRING,
    allowNull: false,
},
age:{
    type: DataTypes.STRING,
    allowNull: false,
},
email:{
    type: DataTypes,STRING,
    
},
password: {
    type:dataTypes,STRING

},
role:{
    type:DataTypes.ENUM(["user", "admin"]),
},
},
{
timestamps:true, 

}
);

module.exports = User; 