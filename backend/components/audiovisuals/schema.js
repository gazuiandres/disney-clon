const Joi = require("joi");

// GENERAL FIELDS
const id = Joi.number().integer();
const type = Joi.string().min(4);

// AUDIVISUAL FIELDS
const name = Joi.string().min(3);
const synopsis = Joi.string().min(15);
const numberSeasons = Joi.number().integer().min(1);
const createdDate = Joi.date();
const updatedDate = Joi.date();

// IMAGES FIELDS
const backgroundImage = Joi.any();
const thumbnailImage = Joi.any();
const logoImage = Joi.any();

// Association
const categories = Joi.any();

// Filters
const limit = Joi.number().min(0).empty();
const audiovisual_name = Joi.string();
const random = Joi.boolean();


const createAudivisualSchema = Joi.object({
  name: name.required(),
  type: type.required(),
  synopsis: synopsis.required(),
  numberSeasons: numberSeasons.required(),
  createdDate: createdDate.required(),
  updatedDate: updatedDate.required(),
  categories: categories.required()
});

const updateAudiovisualSchema = Joi.object({
  name: name,
  type: type,
  synopsis: synopsis,
  numberSeasons: numberSeasons,
  createdDate: createdDate,
  updatedDate: updatedDate,
});

const getAudiovisualSchema = Joi.object({
  id: id.required(),
});

const createAudiovisualImageSchema = Joi.object({
  backgroundImage: backgroundImage.required(),
  thumbnailImage: thumbnailImage.required(),
  logoImage: logoImage.required(),
});

const updateAudiovisualImageSchema = Joi.object({
  backgroundImage: backgroundImage,
  thumbnailImage: thumbnailImage,
  logoImage: logoImage,
});

const filtersAudiovisualScheme = Joi.object({
  limit: limit,
  random: random,
  audiovisual_name: audiovisual_name,
  type: type
})

module.exports = {
  createAudivisualSchema,
  updateAudiovisualSchema,
  getAudiovisualSchema,
  createAudiovisualImageSchema,
  updateAudiovisualImageSchema,
  filtersAudiovisualScheme
};
