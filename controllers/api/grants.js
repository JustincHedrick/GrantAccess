const Grant = require('../../models/grants');


module.exports = {
  getGrants,
}




async function getGrants(req, res, next) {
  try{
    const grants = await Grant.find()
    console.log(grants)
    return res.status(200).json({
      success: true,
      count: grants.length,
      data: grants,
    });
    

  } catch(err) {
    console.log(err);
    res.status(500).json({ error: 'server error'})
  }
};