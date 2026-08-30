const express = require("express");
const { registerUser,
        loginUser,
        getProfile,
        adminTest}=require("../controllers/authController");
const protect = require("../middleware/authMiddleware")
const admin = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/profile", protect, getProfile);
router.get("/admin-test", protect, admin, adminTest);

module.exports = router;