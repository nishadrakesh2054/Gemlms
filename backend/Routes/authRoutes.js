const express = require("express");
const router = express.Router();
const { protect, authorizeRoles } = require("../middleware/AuthMiddleware");

const authController = require("../Controllers/authenticationcontroller");
const Auth = require("../Models/authModel");





const allowRegistration = async (req, res, next) => {
    const adminExists = await Auth.findOne({ where: { roles: "admin" } });
  
    if (!adminExists) {
      return next(); // Allow registration if no admin exists
    }
  
    return protect(req, res, () => authorizeRoles("admin")(req, res, next));
  };


// Route to register the first admin (Unprotected)
router.post("/register/admin", authController.registerAdmin);
router.get("/check-admin", authController.checkAdmin);

router
  .route("/register")
  .post(allowRegistration, authController.register);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

// Protected route (only logged-in users)
router.get(
  "/users",
  protect,
  authorizeRoles("admin"),
  authController.getAllUsers
);

module.exports = router;
