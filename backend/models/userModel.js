import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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

const User = mongoose.model('User', userSchema);

export default User;