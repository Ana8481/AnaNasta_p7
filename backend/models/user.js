// MODELE DE L'UTILISATEUR

const { Sequelize} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', 
 {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey : true,

    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull : true, 
    /*unique : true*/
},
  username: {
    type : DataTypes.STRING,
    allowNull: true
  }, 
  password: {
      type: DataTypes.STRING,
      allowNull : true
  },
  avatar_url :{
      type : DataTypes.STRING,
      allowNull: true
  },
  date_created:{
      type : Sequelize.DATE,
      allowNull : true
  },
  admin :{
      type : Sequelize.BOOLEAN,
      defaultValue : true
  }


  

  
}, {freezeTableName : true, timestamps : false} )


 return User ;

};
