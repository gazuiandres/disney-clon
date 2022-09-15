const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class UserService {
  constructor() {}

  async findAll() {
    const users = await models.User.findAll({
      attributes: ["id", "email", "roleId", "createdAt", "updatedAt"],
      include: [
        {
          association: "role",
          attributes: ["id", "name"],
        },
      ],
    });
    return users;
  }

  async findOne({ id }) {
    const user = await models.User.findByPk(id, {
      attributes: ["id", "email", "roleId", "createdAt", "updatedAt"],
      include: [
        {
          association: "role",
          attributes: ["id", "name"],
        },
      ],
    });

    if (!user) {
      throw new boom.notFound("User not found");
    }

    return user;
  }

  async findByEmail({ email }) {
    const user = await models.User.findOne({
      where: {
        email: email,
      },
      attributes: ["id", "email", "roleId", "createdAt", "updatedAt", 'password'],
      include: [
        {
          association: "role",
          attributes: ["id", "name"],
        },
      ],
    });

    if (!user) {
      throw new boom.notFound("User not found");
    }

    return user;
  }

  async update({ id, changes }) {
    const user = await this.findOne({ id });

    if (!user) {
      throw new boom.notFound("User not found");
    }

    const udaptedUser = user.update(changes);

    return udaptedUser;
  }

  async delete({ id }) {
    const user = await this.findOne({ id });

    if (!user) {
      throw new boom.notFound("User not found");
    }

    await user.destroy();
    return user;
  }
}

module.exports = UserService;
