const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const bcryptRounds = 10;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  isLaunderer: { type: Boolean, default: false },
  fee: { type: Number, default: null }
},{ timestamps: true });


userSchema.pre('save', function() {

  if (this.isModified('password')) {
    bcrypt.genSalt(bcryptRounds)
    .then(saltvalue =>{
      return bcrypt.hash(this.password, saltvalue);
    })
    .then(hash =>{
      this.password = hash;
      next();
    })
    .catch(err =>{
      next(err);
    });
  } else {
    next();
  }
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
