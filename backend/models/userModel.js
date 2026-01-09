import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({

  email: {

    type: String,
    required: true,
    unique: true,
  },

  password: {

    type: String,
    required: true,
  }
}, { timestamps: true });

//STATIC SIGNUP METHOD
userSchema.statics.signup = async function(email, password) {

  //VALIDATION
  if(!email || !password) {
    throw Error('All fields must be filled');
  };

  if(!validator.isEmail(email)) {
    throw Error('Email is not valid');
  };

  if(!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  };

  //THIS REFERS TO THE MODEL BECAUSE THE USER HASN'T BEEN CREATED JUST YET
  const exists = await this.findOne({ email });

  if(exists) {
    throw Error('Email already in use');
  };

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//STATIC LOGIN METHOD
userSchema.statics.login = async function(email, password) {

  if(!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await User.findOne({ email })

  if(!user) {
    throw Error(`Incorrect email`)
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match) {
    throw Error(`Incorrect password`)
  }

  return user
}

const User = mongoose.model('User', userSchema);

export default User;