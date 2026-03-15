const express = require("express");
const router = express.Router();
const buildController = require("../controllers/buildController");

router.post("/check", buildController.checkBuild);

module.exports = router;
