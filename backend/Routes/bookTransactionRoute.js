const express = require("express");
const {
  issueBook,
  returnBook,
  getActiveTransactions,
  getStudentTransactions,
  getTransactionById,
} = require("../Controllers/bookTransactionController");
const { protect, authorizeRoles } = require("../middleware/AuthMiddleware");

const router = express.Router();

// Issue a book
router.post("/issue", protect, authorizeRoles("admin", "librarian"), issueBook);

// Return a book
router.post(
  "/return",
  protect,
  authorizeRoles("admin", "librarian"),
  returnBook
);

// Get all active transactions
router.get(
  "/active",
  protect,
  authorizeRoles("admin", "librarian"),
  getActiveTransactions
);

// Get transactions for a specific student
router.get(
  "/student/:studentId",
  protect,
  authorizeRoles("admin", "librarian"),
  getStudentTransactions
);

// Get transaction details by ID
router.get(
  "/:transactionId",
  protect,
  authorizeRoles("admin", "librarian"),
  getTransactionById
);

module.exports = router;
