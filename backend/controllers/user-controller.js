import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function createToken(_id) {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

//LOGIN USER
export async function loginUser(req, res) {

  res.json({ message: 'loginUser' });
};

//SIGNUP USER
export async function signupUser(req, res) {

  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //CREATE TOKEN
    const token = createToken(user._id);

    res.status(200).json({ email, token })
  } catch(error) {
    res.status(400).json({ error: error.message });
  };
};