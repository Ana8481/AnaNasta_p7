const express = require('express');


const { Sequelize } = require('sequelize');

require('dotenv').config();

const app = express();

app.use((req, res) => {
    res.json({message : 'Votre requête a bien été reçue!'})
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const sequelize = new Sequelize(process.env.DB, process.env.HOSTNAME, process.env.PASSWORD, {
    host : 'localhost',
    logging: false,
    dialect: 'mysql'
  })
  
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  
  
  
module.exports = app;