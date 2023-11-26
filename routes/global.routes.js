const express = require('express');
const router = express.Router();
const globalController = require('../controllers/global.controller');

router.get("/:keyword", globalController.searchDevice);
router.get("/top", globalController.topInterests);
router.get("/deals", globalController.topDeals);
router.get("/glossary", globalController.glossaryDetails);

module.exports = router;