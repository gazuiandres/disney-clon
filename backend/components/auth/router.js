const express = require("express");
const passport = require("passport");

// Service
const AuthService = require("./services");

// Initialize
const router = express.Router();
const service = new AuthService();

/**
 * Register to system
 * @body email [string] [required]
 * @body username [string] [required]
 * @body password [string] [required]
 */

router.post("/register", async (req, res) => {
  try {
    const data = req.body;

    const user = await service.register({ data });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

/**
 * Login to system
 * @body email [string] [required]
 * @body password [string] [required]
 */

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const token = await service.signToken(user)
      res.json(token);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
