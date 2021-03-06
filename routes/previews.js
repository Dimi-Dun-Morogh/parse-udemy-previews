const express = require('express');
const router = express.Router();
const parsePreviews = require('../services/parsePreviews.js');
const defaultURL =
  'https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/';
//? /previews



router.post('/', async (req, res) => {
  console.log('route previews');
  console.log(req.body.url);
  const url  = req.body.url || defaultURL
  try {
    const data = await parsePreviews(url
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});


//? just in case
router.get('/', async (req, res) => {
  const url  = req.body.url || defaultURL
  try {
    const data = await parsePreviews(url
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;