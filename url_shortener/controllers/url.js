const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: 'url is required' });
  }

  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: []
  });

  return res.json({ id: shortId });
}

async function handleGetUrl(req, res) {
  const shortId = req.params.shortId;

  // find the entry and push a visit timestamp
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } },
    { new: true } // return updated document
  );

  if (!entry) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  // redirect to original URL
  return res.redirect(entry.redirectURL);
}



async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId
    const result=await URL.findOne({shortId})
    return res.json({totalClicks:result.visitHistory.length,analytics:result.visitHistory})
}

module.exports = { handleGenerateNewShortUrl, handleGetUrl ,handleGetAnalytics};