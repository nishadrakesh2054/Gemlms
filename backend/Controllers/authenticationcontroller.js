const Auth = require("../Models/authModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ------------------- First Admin Registration (No Protection) ------------
const loginAdmin = asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if an admin already exists
      const admin = await Auth.findOne({ where: { email, roles: "admin" } });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
  
      // Validate password
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { id: admin.id, roles: admin.roles },
        process.env.JWT_SECRET || "your_secret_key", // fallback in case .env is missing
        { expiresIn: "1h" }
      );
  
      res.status(200).json({
        success: true,
        message: "Admin login successfully",
        token,
      });
    } catch (error) {
      console.error("Error in admin login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // ------------------- Register New Users (Admin only) ------------
  const register = asyncHandler(async (req, res) => {
    try {
      const { name, email, password, roles } = req.body;
  
      // Validate that the logged-in user is an admin
      if (req.user.roles !== "admin") {
        return res.status(403).json({ message: "You are not authorized!" });
      }
  
      // Check if the user already exists
      const userExists = await Auth.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the new user
      const newUser = await Auth.create({
        name,
        email,
        roles,
        password: hashedPassword,
      });
  
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        newUser: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          roles: newUser.roles,
        },
      });
    } catch (error) {
      console.error("Error in registration:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
// -------------------login processs-------------
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Compare the provided password with the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Password matches, create a JWT token
  const token = jwt.sign(
    { userId: user.id, roles: user.roles },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  // Password matches, successful login
  res.status(200).json({
    success: true,
    message: "Login successful",
    token: ` ${token}`,
    name: user.name,
    roles: user.roles,
  });
});

// Get All Users (Admin Only)
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await Auth.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json({ success: true, users });
  } catch (error) {
    console.error("Error in getting users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//--------------------logout user-------------
const logout = asyncHandler(async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logout successfully",
  });
});

module.exports = {
  loginAdmin,
  register,
  login,
  getAllUsers,
  logout,
};
