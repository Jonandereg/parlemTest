const express = require('express');
const router = new express.Router();
const { getClient } = require('../../service');

router.get('/', getClient);

module.exports = router;
