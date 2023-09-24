const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller');

router.get("/", brandController.listBrands);
router.get("/:brandId", brandController.listBrandModels);

module.exports = router;