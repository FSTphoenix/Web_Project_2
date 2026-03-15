const express = require("express");
const router = express.Router();

const componentController = require("../controllers/componentController");
const { createComponentValidator } = require("../validators/componentValidator");
const validateRequest = require("../middleware/validateRequest");

router.post("/",createComponentValidator,validateRequest,componentController.createComponent);
router.get("/", componentController.getAllComponents);
router.put("/:id", componentController.updateComponent);
router.delete("/:id", componentController.deleteComponent);


module.exports = router;

