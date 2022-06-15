//ROUTEUR utilisateur 

//importation d'express pour créer un routeur 
const express = require('express');

/*const auth = require('../middleware/auth');*/

//création du routeur ac la fonction routeur d'express
const router = express.Router();

/*on associe le controleur qui est associé aux differentes routes */
const userCtrl = require('../controllers/user');


//routes POST -car le front end va envoyer des infos -mails et mdp

// inscription user
router.post('/signup', userCtrl.signup);

// connexion user
router.post('/login', userCtrl.login);

//déconnexion user
router.get('/logout', userCtrl.logout);

//supprimer compte user
router.post('/delete', userCtrl.delete);

module.exports = router;