const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');

router.get("/:deviceId", deviceController.viewDeviceInfo);

module.exports = router;