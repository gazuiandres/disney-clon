const  {Sequelize, Op } = require("sequelize");
const boom = require("@hapi/boom");
const { models } = require("../../libs/sequelize");

const ProcessImages = require("../../common/services/processImages");
const { AUDIOVISUAL_IMAGE_STRATEGY } = require("../../utils/globalVariables");

class AudiovisualService {
  constructor() {
    this.processImages = new ProcessImages();
  }

  async findAll({ filters }) {
    const { limit, audiovisualName, random, type } = filters;
    const options = {
      include: [
        {
          association: "categories",
          attributes: ["id", "name"],
        },
      ],
    };

    if(random) {
      options.order = Sequelize.literal('rand()')
    }

    if (limit) {
      options.limit = limit;
    }

    if (audiovisualName) {
      options.where = {
        name: {
          [Op.substring]: audiovisualName,
        },
      };
    }

    if(type) {
      options.where = {
        ...options.where,
        type
      }
    }

    const items = await models.Audiovisual.findAll(options);
    return items;
  }

  async findOne({ id }) {
    const audiovisual = await models.Audiovisual.findByPk(id, {
      include: [
        {
          association: "categories",
          attributes: ["id", "name"],
        },
      ],
    });
    return audiovisual;
  }

  async create({ data, buffers }) {
    const { backgroundImage, thumbnailImage, logoImage } = buffers;

    const { backgroundStrategy, thumbnailStrategy, logoStrategy } =
      AUDIOVISUAL_IMAGE_STRATEGY;

    const backgroundUrls = await this.processImages.optimizeImage({
      buffer: backgroundImage.data,
      folder: backgroundStrategy.folder,
      desktopSize: backgroundStrategy.desktopSize,
      mobileSize: backgroundStrategy.mobileSize,
    });

    const thumbnailUrls = await this.processImages.optimizeImage({
      buffer: thumbnailImage.data,
      folder: thumbnailStrategy.folder,
      desktopSize: thumbnailStrategy.desktopSize,
      mobileSize: thumbnailStrategy.mobileSize,
    });

    const logoImageUrl = await this.processImages.optimizeImage({
      buffer: logoImage.data,
      folder: logoStrategy.folder,
      desktopSize: logoStrategy.desktopSize,
      mobileSize: logoStrategy.mobileSize,
    });

    data = {
      ...data,
      background: backgroundUrls.desktopUrl,
      logoDesktop: logoImageUrl.desktopUrl,
      logoMobile: logoImageUrl.mobileUrl,
      thumbnailDesktop: thumbnailUrls.desktopUrl,
      thumbnailMobile: thumbnailUrls.mobileUrl,
    };

    const audiovisual = await models.Audiovisual.create(data);

    await audiovisual.setCategories([...data.categories]);

    return audiovisual;
  }

  async update({ id, changes }) {
    const audiovisual = await this.findOne({ id });

    if (!audiovisual) {
      throw boom.notFound("Audiovisual not found");
    }

    const udaptedAudiovisual = audiovisual.update(changes);

    return udaptedAudiovisual;
  }

  async updateImages({ id, buffers }) {
    const audiovisual = await this.findOne({ id });
    const { backgroundImage, thumbnailImage, logoImage } = buffers;

    if (!audiovisual) {
      throw boom.notFound("Audiovisual not found");
    }

    const { backgroundStrategy, thumbnailStrategy, logoStrategy } =
      AUDIOVISUAL_IMAGE_STRATEGY;

    const images = {
      backgroundImages: [audiovisual.background],
      thumbnailImages: [audiovisual.thumbnailDesktop],
      logoImages: [audiovisual.logoDesktop],
    };

    let data = {};

    if (backgroundImage) {
      const backgroundOptimized = await this.processImages.updateImage({
        imagesName: [...images.backgroundImages],
        options: {
          ...backgroundStrategy,
        },
        buffer: backgroundImage.data,
      });

      data = {
        ...data,
        background: backgroundOptimized.desktopUrl,
      };
    }

    if (thumbnailImage) {
      const thumbanilOptimized = await this.processImages.updateImage({
        imagesName: [...images.thumbnailImages],
        options: {
          ...thumbnailStrategy,
        },
        buffer: thumbnailImage.data,
      });

      data = {
        ...data,
        thumbnailDesktop: thumbanilOptimized.desktopUrl,
        thumbnailMobile: thumbanilOptimized.mobileUrl,
      };
    }

    if (logoImage) {
      const logoOptimized = await this.processImages.updateImage({
        imagesName: [...images.logoImages],
        options: {
          ...logoStrategy,
        },
        buffer: logoImage.data,
      });

      data = {
        ...data,
        logoDesktop: logoOptimized.desktopUrl,
        logoMobile: logoOptimized.mobileUrl,
      };
    }

    const newAudiovisual = await audiovisual.update(data);
    return newAudiovisual;
  }

  async deleteAllImages(audiovisual, folder) {
    const { background, thumbnailDesktop, logoDesktop } = audiovisual;

    const imagesNames = [background, thumbnailDesktop, logoDesktop];

    let images = [];

    for (const image of imagesNames) {
      const imageId = image.split("/").pop();
      images.push(`${folder}/${imageId}`);
    }

    await this.processImages.deleteImages({ images });
  }

  async delete({ id }) {
    const audiovisual = await this.findOne({ id });
    const { globalFolder } = AUDIOVISUAL_IMAGE_STRATEGY;

    if (!audiovisual) {
      throw boom.notFound("Audiovisual not found");
    }

    try {
      this.deleteAllImages(audiovisual, globalFolder);

      await models.CategoryAudiovisual.destroy({
        where: {
          audiovisualId: audiovisual.id,
        },
      });

      await audiovisual.destroy();
      return audiovisual;
    } catch (error) {
      return boom.badImplementation("Error deleting Audiovisual");
    }
  }
}

module.exports = AudiovisualService;
