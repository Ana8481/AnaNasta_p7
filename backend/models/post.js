const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:',{define : {
    freezeTableName : true
}});


const Post = sequelize.define('Post', {
  // Model attributes are defined here
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull : true
  },
  post :{
      type: DataTypes.STRING,
    
  },
  image_url :{
    type : DataTypes.STRING
  },
  date_created: {
      type: DataTypes.INTEGER,
      allowNull : false
  },
  date_updated: {
    type : DataTypes.INTEGER
  }

});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true


