const express = require("express");
const router = express.Router();

const { getModel } = require('../controller/main');

router.get('/model', getModel);

module.exports = router;