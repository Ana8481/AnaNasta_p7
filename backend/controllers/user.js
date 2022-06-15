//CONTROLEUR UTILISATEUR

//package qui encrypte le mot de passe
const bcrypt = require("bcrypt");

//package permettant la création et la vérification des tokens d'authentif'
const jwt = require('jsonwebtoken');



//importation du modele user
const User = require('../models').User;


// Middleware pour inscription de l'utilisateur
exports.signup = (req, res, next) => {
    //fonction pour hasher le mot de passe
    console.log(req.body)
    bcrypt.hash(req.body.password, 10) 
    .then(hash => {

        
       
        //enregistrement de cet utilisateur
       
        //status 201 nouvelle ressource créee
        User.create ({
            username : req.body.username,
            email: req.body.email,
            password : hash,
            date_created: new Date()
            
        })
        .then(() => res.status(201).json({message: 'utilisateur crée !'}))
        .catch(error => {res.status(500).json({error});
        console.log(error)} )
    })
    // erreur serveur
    .catch(error => {res.status(500).json({error});
    console.log(error)} )
};

// CONNEXION DE L'UTILISATEUR 
exports.login = (req, res, next) => {

    //email utilisateur
    User.findOne( {email : req.body.email}) 
     
        .then( user => {

            // fonction asynchrone
            if (!user) {
                return res.status(401).json({error: "Utilisateur non trouvé"})

            }
            // SI OK alors fonction asynchrone pour comparaison des mots de passe
            // comparaison mdp entré par l'utilisateur et le mdp dans la base
            bcrypt.compare(req.body.password, user.password)

            // boolean
            .then(valid => {
                // si non valide , erreur
                if (!valid) {
                    return res.status(401).json({error: 'Mot de passe incorrect'})
                }

                // si ok alors renvoie d'un objet avec id + token 
                res.status(200).json({
                    userId: user._id,
                    //on encode un nouveau token contenant l'id user
                    token: jwt.sign(
                      { userId: user._id },
                      'RANDOM_TOKEN',
                      { expiresIn: '24h' }
                    )
                });
            })
            .catch(error);
        })
        .catch(error => res.status(500).json({error}))


}


// Déconnexion de l'utilisateur
exports.logout = (req, res, next) => {

}

// Suppression du compte de l'utilisateur 
exports.delete = (req, res, next) => {
    let userId = parseInt(req.params.id);

    if(!userId) {
        return res.status(400).json({message: "Missing parameters"})
    }

    //supprimer personne 
    User.destroy({where: {id: userId}, force: true})
    .then(()=> res.status(204).json({message:"ok" })
    .catch(err => res.status(500).json({message: "erreur "})))
}