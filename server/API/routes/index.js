const express = require('express');
const router = new express.Router();
const { getClient } = require('../../service');

router.post('/', getClient);

module.exports = router;
