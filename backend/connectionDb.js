//fichier permettant la synchronisation de la base de donnée


const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('socialnetwork', 'root', 'urQx*AO64Yp!', {
    host: 'localhost',
    dialect: 'mysql'
  });
 

  module.exports=sequelize