const express = require("express");
const productController = require("../controllers/productController");
const validateIdParam = require("../middleware/validateIdParam");
const validateProduct = require("../middleware/validateProduct");

const router = express.Router();

router.get("/", productController.getAll);
router.get("/:id", validateIdParam, productController.getById);
router.post("/", validateProduct, productController.create);
router.delete("/:id", validateIdParam, productController.remove);
router.put("/:id", validateIdParam, validateProduct, productController.update);
module.exports = router;
