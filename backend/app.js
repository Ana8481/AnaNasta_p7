const express = require('express');

const helmet = require("helmet");

const path = require('path');


const db = require('./connectionDb');


//importation du routeur correspondant aux utilisateurs
const user = require("./routes/user");

//importation du routeur correspondant aux posts
const RoutesPost = require("./routes/post");


/*importation du routeur correspondant aux commentaires
const RoutesComment = require("./routes/comment");*/


const { Sequelize } = require('sequelize');

//importation dotenv
require('dotenv').config();

const app = express();



db.sync()
.then(console.log("connection réussie à la base de donnée"))
.catch(error => console.log(error));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(helmet());

//URL de la route utilisateur
app.use('/api/user', user);

//URL de la route post
app.use('/api/post', RoutesPost);

/*URL de la route commentaire
app.use('/api/comment', RoutesComment)*/






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


  app.get('/', (req, res) => res.send('INDEX'))

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, console.log(`server started on port ${PORT}`))
  
  
  
module.exports = app;