const express = require("express");
const {
  registerUser,
  authUser,
  getUserProfile,
} = require("../controllers/user.controllers.js");
const { protect } = require("../middlewares/auth.middleware.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
