import User from "../models/userModel.js";

//LOGIN USER
export async function loginUser(req, res) {

  res.json({ message: 'loginUser' });
};

//SIGNUP USER
export async function signupUser(req, res) {

  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user })
  } catch(error) {
    res.status(400).json({ error: error.message });
  };
};