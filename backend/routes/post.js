//ROUTEUR Post

// importation express pr creation routeur
const express = require('express');

//création du routeur ac la fonction routeur d'express
const router = express.Router();

//association du contrôleur associé aux routes suivantes
const postCtrl = require('../controllers/post');


// ROUTES POUR LE POST

//création d'un post
router.post('/', postCtrl.createPost);

//supprimer un post
router.delete('/:id', postCtrl.deletePost);

//modifier le post
router.put('/:id', postCtrl.modifyPost);

//accès à un post
router.get('/:id', postCtrl.getOnePost);

//accès à tous les posts
router.get('/', postCtrl.getAllPosts);

//liker le post
router.post('/:id/like', postCtrl.likePost);

// commenter le post
router.post('/:id', postCtrl.commentPost);


module.exports = router;




