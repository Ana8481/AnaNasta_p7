const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:',{define : {
    freezeTableName : true
}});


const Comment = sequelize.define('Post', {
  // Model attributes are defined here
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull : true
  },
  post_id :{
      type: DataTypes.INTEGER,
    
  },
  comment :{
    type : DataTypes.STRING
  },
  image_url: {
      type: DataTypes.STRING,
      allowNull : false
  }
  ,
  date_created: {
    type : DataTypes.DATE
  }
  ,
  date_updated: {
    type : DataTypes.DATE
  }

});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true


