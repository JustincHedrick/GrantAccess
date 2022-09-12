const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken,
  update,
  getProfile,
  getUser
};


async function getUser(req, res) {
    const user = await User.findById(req.params.userid)
    res.status(200).json(user)
}

async function getProfile(req, res){
  const userProfile = await User.findOne({_id: req.user._id})
  // console.log(userProfile)
  res.json(userProfile);
}


async function update(req, res){
  console.log(req.body);
  const user = await User.findById(req.user._id)
  user.firstName=req.body.firstName
  user.lastName=req.body.lastName
  user.email=req.body.email
  user.role=req.body.role
  user.organization=req.body.organization
  user.location=req.body.location
  user.about=req.body.about
  user.experience=req.body.experience
  user.jobDescription=req.body.jobDescription
  console.log(user);
  user.save();
  // res.redirect(`/profile`)
}


async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // The token is a string, but yes, we can
    // res.json a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // extra data for the payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}