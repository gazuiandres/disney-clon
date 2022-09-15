const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

class CategoryService {
  constructor() {}

  async findAll() {
    const category = await models.Category.findAll();
    return category;
  }

  async findOne({ id }) {
    const category = await models.Category.findByPk(id);

    if (!category) {
      throw new boom.notFound();
    }

    return category;
  }

  async create({ data }) {
    const categorie = await models.Category.create(data);
    return categorie;
  }

  async update({ id, changes }) {
    const category = await this.findOne({ id });

    if (!category) {
      throw new boom.notFound();
    }

    const categoryUpdated = await category.update(changes);

    return categoryUpdated;
  }

  async delete({ id }) {
    const category = await this.findOne({ id });

    if (!category) {
      throw new boom.notFound();
    }

    await models.CategoryAudiovisual.destroy({
      where: {
        categoryId: category.id,
      },
    });

    await category.destroy();
    return category;
  }
}

module.exports = CategoryService;
