//MODELE DU COMMENTAIRE


const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
const Comment = sequelize.define('Post', {
  // Model attributes are defined here
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull : false
  },
  post_id :{
      type: DataTypes.INTEGER,
      allowNull: false
    
  },
  comment :{
    type : DataTypes.STRING
  },
  image_url: {
      type: DataTypes.STRING,
      allowNull : true
  }
  ,
  date_created: {
    type : DataTypes.DATE,
    allowNull: false
  }
  ,
  date_updated: {
    type : DataTypes.DATE
  }

})
return Comment;

};




