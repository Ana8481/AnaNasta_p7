

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:',{define : {
    freezeTableName : true
}});

const User = sequelize.define('User', {
  
  user_id: {
    type: DataTypes.INTEGER,

    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull : false, 
    unique : true
},
  username: {
    type : DataTypes.STRING,
    allowNull: false
  }, 
  password : {
      type: DataTypes.STRING,
      allowNull : false
  },
  avatar_url :{
      type : DataTypes.STRING,
      allowNull: true
  },
  date_created:{
      type : Sequelize.DATE
  },
  admin :{
      type : Sequelize.BOOLEAN,
      defaultValue : false
  }
  
});


console.log(User === sequelize.models.User); // true