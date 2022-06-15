// MODELE DU POST


const { Sequelize } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
const Post = sequelize.define('Post', {
  // Model attributes are defined here
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull : false
  },
  
  post :{
      type: DataTypes.STRING,
    
  },
  image_url :{
    type : DataTypes.STRING,
    allowNull : true
  },
  date_created: {
      type: DataTypes.INTEGER,
      allowNull : false

      //CHANGER par true pour TESTER SUR POSTMAN
  },
  date_updated: {
    type : DataTypes.INTEGER
  }

})


return Post;
};




