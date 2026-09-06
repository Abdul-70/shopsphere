const express = require("express");

const router = express.Router();

const {
  addToCart,
  getMyCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");

const protect = require("../middleware/authMiddleware");

// Add product to cart
router.post("/", protect, addToCart);
router.get("/", protect, getMyCart);
router.put("/:productId", protect, updateCartQuantity);
router.delete("/clear", protect, clearCart);
router.delete("/:productId", protect, removeFromCart);

module.exports = router;
