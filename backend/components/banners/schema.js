const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3);
const status = Joi.string().min(3).max(10);
const titleBanner = Joi.any();
const backgroundBanner = Joi.any();

const createBannerSchema = Joi.object({
  name: name.required(),
  status: status.required(),
});

const updateBannerSchema = Joi.object({
  name: name,
  status: status,
});

const createBannerImagesSchema = Joi.object({
  titleBanner: titleBanner.required(),
  backgroundBanner: backgroundBanner.required(),
});

const updateBannerImagesSchema = Joi.object({
  titleBanner: titleBanner,
  backgroundBanner: backgroundBanner,
});

const getBannerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createBannerSchema,
  updateBannerSchema,
  createBannerImagesSchema,
  updateBannerImagesSchema,
  getBannerSchema,
};
