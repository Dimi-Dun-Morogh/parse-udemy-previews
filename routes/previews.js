const express = require('express');
const router = express.Router();
const parsePreviews = require('../services/parsePreviews.js');
const defaultURL =
  'https://www.udemy.com/course/flutter-dart-the-complete-flutter-app-development-course/';
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

module.exports = router;