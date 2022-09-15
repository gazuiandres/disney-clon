const express = require("express");
const passport = require("passport");

const validatorHandler = require("../../middlewares/validator.handler");
const { checkRoles } = require("../../middlewares/auth.handler");

const {
  getAudiovisualSchema,
  createAudivisualSchema,
  updateAudiovisualSchema,
  createAudiovisualImageSchema,
  updateAudiovisualImageSchema,
  filtersAudiovisualScheme,
} = require("./schema");

// Service
const AudiovisualService = require("./services");

// Initialize
const router = express.Router();
const service = new AudiovisualService();

/**
 * get all
 */

router.get(
  "/",
  validatorHandler(filtersAudiovisualScheme, "query"),
  async (req, res, next) => {
    try {
      const { limit,  audiovisual_name, random, type } = req.query;
      const filters = {
        limit: Number(limit),
        audiovisualName: audiovisual_name,
        random: Boolean(random),
        type
      };

      const items = await service.findAll({ filters });
      res.json(items);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Get one Audiovisual
 */

router.get(
  "/:id",
  validatorHandler(getAudiovisualSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const audiovisual = await service.findOne({ id });
      res.json(audiovisual);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create Audiovisual [only one image per field]
 * @body name [string] [required]
 * @body type [string] [required]
 * @body sypnosis [text] [required]
 * @body numberSeasons [int] [required]
 * @body createdDate [date] [required]
 * @body updatedDate [date] [required]
 * @file backgroundImage [img] [required]
 * @file logoImage [img] [required]
 * @file thumbnailImage [img] [required]
 */

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(createAudivisualSchema, "body"),
  validatorHandler(createAudiovisualImageSchema, "files"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const buffers = req.files;

      const audiovisual = await service.create({ data, buffers });
      res.status(201).json(audiovisual);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update generic Audiovisual fields
 * @param id [int]
 * @body name [string]
 * @body type [string]
 * @body sypnosis [text]
 * @body numberSeasons [int]
 * @body categories [categories_id] [array]
 * @body createdDate [date]
 * @body updatedDate [date]
 */

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getAudiovisualSchema, "params"),
  validatorHandler(updateAudiovisualSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;

      const audiovisual = await service.update({ id, changes });
      res.status(200).json(audiovisual);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Update Audiovisual images
 * @param id [int]
 * @file background [img]
 * @file logoDesktop [img]
 * @file logoMobile [img]
 * @file thumbnailDesktop [img]
 * @file thumbnailMobile [img]
 */

router.put(
  "/:id/images",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getAudiovisualSchema, "params"),
  validatorHandler(updateAudiovisualImageSchema, "file"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const buffers = req.files;

      const audiovisual = await service.updateImages({ id, buffers });
      res.status(200).json(audiovisual);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Delete audiovisual and it's images
 * @param id [int]
 */

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  validatorHandler(getAudiovisualSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const audiovisual = await service.delete({ id });
      res.json({
        message: "Audiovisual deleted",
        audiovisual,
      });
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
