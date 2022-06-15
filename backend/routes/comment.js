//ROUTEUR commentaire

// importation d'express pour créer un routeur 
const express = require('express');

// créaction d'un routeur 
const router = express.Routeur();

//association du controleur liés aux routes suivantes
const commentCtrl = require('../controllers/comment');


// ROUTES COMMENTAIRE

// Création d'un commentaire
router.get('/:id', commentCtrl.createComment);


//supprimer commentaire
router.delete('/:id', commentCtrl.deleteComment);


//modifier le commentaire
router.put('/:id', postCtrl.modifyComment);

//accès à un commentaire
router.get('/:id', postCtrl.getOneComment);


//liker le commentaire
router.post('/:id/like', postCtrl.likeComment);

// répondre au commentaire
router.post('/:id', postCtrl.respondToComment);


module.exports = router;