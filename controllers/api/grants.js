const Grant = require('../../models/grants');

module.exports = {
  getGrants,
  getGrant,
  saveGrant
}

async function getGrants(req, res, next) {
  const grants = await Grant.find();
  res.json(grants);
};

async function getGrant(req, res) {
  console.log(req.params.grantId);
  const grant = await Grant.findById(req.params.grantId);
  console.log(grant);
  return res.json(grant);
}

async function saveGrant(req, res) {
  let grant = await Grant.findOne({ _id: req.body.grantId, users: req.body.userId });
  try {
    grant = await Grant.findByIdAndUpdate(req.body.grantId, { [grant ? '$pull' : '$push']: { "users": req.body.userId } }, { new: true });
    console.log(grant);
  } catch (err) {
    return res.status(400).json(err);
  }
  return res.status(200).json(grant);
}