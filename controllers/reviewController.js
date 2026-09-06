const Review = require("../models/reviewModel");
const Product = require("../models/productModel");

const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const productId = req.params.productId;

    // Check product
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Check required fields
    if (!rating || !comment) {
      return res.status(400).json({
        message: "Rating and comment are required",
      });
    }

    // Check existing review
    const existingReview = await Review.findOne({
      product: productId,
      user: req.user.userId,
    });

    if (existingReview) {
      return res.status(400).json({
        message: "You have already reviewed this product",
      });
    }

    // Create review
    const review = await Review.create({
      product: productId,
      user: req.user.userId,
      rating,
      comment,
    });

    // Update review and rating
    const reviews = await Review.find({
      product: productId,
    });

    const totalReviews = reviews.length;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

    const averageRating = totalRating / totalReviews;

    await Product.findByIdAndUpdate(productId, {
      rating: Number(averageRating.toFixed(2)),
      numReviews: totalReviews,
    });

    res.status(201).json({
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getProductReviews = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const reviews = await Review.find({
      product: productId,
    }).populate("user", "name");

    res.status(200).json({
      message: "Reviews fetched successfully",
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    // Sirf review ka owner ya admin delete kar sakta hai
    if (
      review.user.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "You can only delete your own review",
      });
    }

    const productId = review.product;

    // Delete review
    await Review.findByIdAndDelete(req.params.reviewId);

    // Remaining reviews fetch karo
    const reviews = await Review.find({
      product: productId,
    });

    const totalReviews = reviews.length;

    const totalRating = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    const averageRating =
      totalReviews > 0 ? totalRating / totalReviews : 0;

    // Product rating update
    await Product.findByIdAndUpdate(productId, {
      rating: Number(averageRating.toFixed(2)),
      numReviews: totalReviews,
    });

    res.status(200).json({
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createReview,
  getProductReviews,
  deleteReview
};
