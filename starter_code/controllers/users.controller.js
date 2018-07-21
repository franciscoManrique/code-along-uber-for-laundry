const User = require('../models/user');


module.exports.create = (req, res, next) =>{
    res.render('users/create');
};
module.exports.doCreate = (req, res, next) =>{
    if (!req.body.email || !req.body.password) {
        res.render('users/create', {erros: {email:'email is already chosen'}});
    } else{
        User.findOne({email: req.body.email})
        .then(user =>{
            if (user) {
                console.log(user);
                
            } else{
                // const new
            }
        })
        .catch(error =>{
            next(error);
        });
    }
    
};