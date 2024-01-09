const express = require("express");
const router = express.Router();

const contactForm = require("../Controllers/Contact-controller");

router.route("/contact").post(contactForm);

module.exports = router;