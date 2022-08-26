const Grant = require('../../models/grants');


module.exports = {
  getGrants,
}




async function getGrants(req, res, next) {
    const grants = await Grant.find();
    res.json(grants);
};