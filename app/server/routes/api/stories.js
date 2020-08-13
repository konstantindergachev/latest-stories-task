const express = require('express');
const router = express.Router();
const { getTimeStories } = require('../../controllers/stories');

router.get('/', getTimeStories);

module.exports = router;
