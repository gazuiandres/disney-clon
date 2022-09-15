const express = require("express");
const passport = require("passport");

// Service
const BannerService = require("./services");

// Initialize
const router = express.Router();
const service = new BannerService();

const validatorHandler = require("../../middlewares/validator.handler");
const { checkRoles } = require("../../middlewares/auth.handler");

const {
  createBannerSchema,
  updateBannerSchema,
  createBannerImagesSchema,
  updateBannerImagesSchema,
  getBannerSchema,
} = require("./schema.js");

/**
 * Get published Banners
 */

router.get("/", async (req, res, next) => {
  try {
    const banners = await service.findActiveBanners();
    res.json(banners);
  } catch (error) {
    next(error);
  }
});

/**
 * Get all Banners
 */

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  async (req, res, next) => {
    try {
      const banners = await service.findAll();
      res.json(banners);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Get one Banner
 * @params id [int]
 */

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getBannerSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const banner = await service.findOne({ id });
      res.json(banner);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create Banner [only one image per field]
 * @body name [string] [required]
 * @body status [string] [required] [options: draft | published]
 * @file backgroundImage [img] [required]
 * @file titleImage [img] [required]
 */

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(createBannerSchema, "body"),
  validatorHandler(createBannerImagesSchema, "files"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const buffers = req.files;
      const banner = await service.create({ buffers, data });
      res.status(201).json(banner);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update generic Banner fields
 * @params id [int]
 * @body name [string]
 * @body status [string] [options: draft | published]
 */

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getBannerSchema, "params"),
  validatorHandler(updateBannerSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;

      const banner = await service.update({ id, changes });
      res.status(200).json(banner);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update Banner images
 * @params id [int]
 * @file backgroundImage [img]
 * @file titleImage [img]
 */

router.put(
  "/:id/images",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getBannerSchema, "params"),
  validatorHandler(updateBannerImagesSchema, "files"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const buffers = req.files;
      const banner = await service.updateImages({ id, buffers });
      res.status(200).json(banner);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Delete Banner and it's images
 * @params id [int]
 */

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getBannerSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const banner = await service.delete({ id });
      res.json({
        message: "Banner deleted",
        banner,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
