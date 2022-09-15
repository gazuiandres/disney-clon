const express = require("express");
const passport = require('passport')



// Service
const CategoryService = require("./services");

// Initialize
const router = express.Router();
const service = new CategoryService();

const validatorHandler = require("../../middlewares/validator.handler");
const { checkRoles } = require('../../middlewares/auth.handler')
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require("./schema");

/**
 * Get all categories
 */

router.get("/", async (req, res, next) => {
  try {
    const categories = await service.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

/**
 * Get one Category
 * @params id [int]
 */

router.get(
  "/:id",
  validatorHandler(getCategorySchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const categories = await service.findOne({ id });
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create Category
 * @body name [string] [required]
 * @body description [text] [required]
 */

router.post(
  "/",
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(createCategorySchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const category = await service.create({ data });
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update Category
 * @params id [int]
 */

router.put(
  "/:id",
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(getCategorySchema, "params"),
  validatorHandler(updateCategorySchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;

      const category = await service.update({ id, changes });
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Delete Category
 * @params id [int]
 */

router.delete(
  "/:id",
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(getCategorySchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const category = await service.delete({ id });
      res.status(200).json({
        message: "category deleted",
        category,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
