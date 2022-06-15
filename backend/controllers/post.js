// CONTROLEUR POST


const Post = require('../models/post');

const fs = require('fs');


// Création d'un post
exports.createPost = (req, res, next) => {

    const postObject = JSON.parse(req.body.post);
   
    const post = new Post({
      ...postObject
      }
    );
    Post
      .save()
      .then(() => res.status(201).json({ message: "Post envoyé !" }))
      .catch((error) => {
        console.log(error);
  
        res.status(500).json({ error });
      });
  };


// Suppression d'un post
exports.deletePost = (req, res, next) => {

}

//Modification d'un post
exports.modifyPost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId != req.body.userId) {
        res.status(403).json({
          message:
            "vous ne pouvez pas apporter de modification ",
        });
      }

      const filename = post.image_url.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        const postObject = req.file
          ? {
              ...JSON.parse(req.body.post),
              image_url: `${req.protocol}://${req.get("host")}/images/${
                req.file.filename
              }`,
            }
          : { ...req.body };

        Post.updateOne(
          { _id: req.params.id },
          { ...postObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Post modifié " }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};



// Aller à un post
exports.getOnePost = (req, res, next) => {
    
        Post.findOne({
          _id: req.params.id,
        })
          .then((post) => {
            res.status(200).json(post);
          })
          .catch((error) => {
            res.status(404).json({
              error: error,
            });
          });
      };


// Aller à tous les posts
exports.getAllPosts = (req, res, next) => {
    Post.find()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });

}

// Post avec la mention j'aime
exports.likePost = (req, res, next) => {
    if (req.body.like === 1) {
        // si le user like le post //
        Post.updateOne(
          { _id: req.params.id },
          {
            $inc: { like: req.body.like++ },
            /*
            $push: { usersLiked: req.body.userId },*/
          }
        ) // on ajoute 1 like et on le push l'array usersLiked //

          // ajout de la mention de la personne qui aimé le post ??
          .then((post) => res.status(200).json({ message: "Like" }))
          .catch((error) => res.status(400).json({ error }));
     
        }

}

// Commenter un post
exports.commentPost = (req, res, next) => {

}