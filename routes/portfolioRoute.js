const express = require("express");
const { sendEmailController } = require("../controllers/porfolioController");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);

// /export
module.exports = router;
