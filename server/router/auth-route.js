const express = require("express");
const router = express.Router()
const controller=require("../Controllers/Controllers");
const validate = require("../middleware/auth-middleware");
const signupSchema = require("../validaitor/validaction-auth");
const contactForm = require("../Controllers/Contact-controller");

  router.route("/").get(controller.home);



  router.route("/register").post(validate(signupSchema),controller.register);
  router.route("/login").post(controller.login);

  router.route("/contact").post(contactForm);

  module.exports = router