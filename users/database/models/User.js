const bcrypt = require("bcryptjs");


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",
     {
        id:{
            type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
        },
        email:{
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.VIRTUAL,
        },
        password_hash: {
        type: DataTypes.STRING,
        },
        createdAt:{
            type: {
                type: DataTypes.DATE,
            },
            updatesAt: {
                type: DataTypes.DATE,
            }
        },
    },
    {
            tableName:"users",
            timestamps: true
        });

     User.addHook("beforeSave", async user => {
           if(user.password){
               user.password_hash = await bcrypt.hash(user.password,12);
           }
           user.password_hash =await bcrypt.hash(user.password, 12);    
     })
        
     
     return User;
}