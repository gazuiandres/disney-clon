const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const username = Joi.string().min(5);
const password = Joi.string().min(8);
const roleId = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  username: username.required(),
  password: password.required(),
  roleId: roleId.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  username: username,
  password: password,
  roleId: roleId,
});


const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema};
