const User = require('../models/user');


module.exports.create = (req, res, next) =>{
    res.render('users/create');
};
module.exports.doCreate = (req, res, next) =>{
    if (!req.body.email || !req.body.password) {
        res.render('users/create', {erros: {email:'email or password is empty'}});
    } else{
        User.findOne({email: req.body.email})
        .then(user =>{
            if (user) {
                res.render('users/create', {erros: {email:'email is already chosen'}});
                
            } else{
                 const newUser = new User(req.body);
                 return newUser.save()
                 .then((user) => {
                    res.render('sessions/sessions.create')


                 })
                 
            }
        })
        .catch(error =>{
            next(error);
        });
    }
    
};