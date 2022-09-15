const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { models } = require("../../libs/sequelize");
const { config } = require("../../config");

const UserService = require("../users/services");
const service = new UserService();

class AuthService {
  constructor() {}

  async register({ data }) {
    const { password } = data;

    data = {
      ...data,
      password: await bcrypt.hash(password, 10),
    };

    const newUser = models.User.create(data, {
      attributes: ["id", "email"],
    });

    if (!newUser) {
      throw new boom.badRequest("Registration error");
    }

    delete user.DataValues.password;

    return newUser;
  }

  async getUser(email, password) {
    const user = await service.findByEmail({ email });
    
    if (!user) {
      throw new boom.unauthorized();
    }
    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new boom.unauthorized();
    }

    return user;
  }

  async signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role.name,
    };

    const token = jwt.sign(payload, config.jwtSecret);
    return {
      token,
    };
  }
}

module.exports = AuthService;
