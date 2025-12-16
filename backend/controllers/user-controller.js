import User from "../models/userModel.js";

//LOGIN USER
export async function loginUser(req, res) {

  res.json({ message: 'loginUser' });
};

//SIGNUP USER
export async function signupUser(req, res) {

  res.json({ message: 'signupUser '});
}