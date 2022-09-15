const express = require("express");
const passport = require("passport");

// Service
const UserService = require("./services");

// Initialize
const router = express.Router();
const service = new UserService();

const validatorHandler = require("../../middlewares/validator.handler");
const { checkRoles } = require("../../middlewares/auth.handler");

const { updateUserSchema, getUserSchema } = require("./schema");

/**
 * Get all Users
 */

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  async (req, res, next) => {
    try {
      const users = await service.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Get one User
 * @parmas id [int]
 */

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await service.findOne({ id });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update Users
 * @body email [string] 
 * @body username [string] 
 * @body password [string] 
 */

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;

      const user = await service.update({ id, changes });
      res.json({
        message: "User updated",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Delete User
 * @params id [int]
 */

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await service.delete({ id });
      res.json({
        message: "User deleted",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
