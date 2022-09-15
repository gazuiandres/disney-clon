const boom = require("@hapi/boom");

const { models } = require("../../libs/sequelize");

const ProcessImages = require("../../common/services/processImages");
const { BANNERS_IMAGE_STRATEGY } = require("../../utils/globalVariables");

class BannerService {
  constructor() {
    this.processImages = new ProcessImages();
  }

  async findAll() {
    const Banners = await models.Banner.findAll();
    return Banners;
  }

  async findOne({ id }) {
    const banner = await models.Banner.findByPk(id);

    if (!banner) {
      throw new boom.notFound("Banner not found");
    }

    return banner;
  }

  async findActiveBanners() {
    const Banners = await models.Banner.findAll({
      where: {
        status: "published",
      },
    });
    return Banners;
  }

  async create({ data, buffers }) {
    const { name, status } = data;
    const { titleBanner, backgroundBanner } = buffers;
    const { titleStrategy, backgroundStrategy } = BANNERS_IMAGE_STRATEGY;

    // Banner title
    const titleUrls = await this.processImages.optimizeImage({
      buffer: titleBanner.data,
      folder: titleStrategy.folder,
      desktopSize: titleStrategy.desktopSize,
      mobileSize: titleStrategy.mobileSize,
    });

    // Banner Background
    const backgroundUrls = await this.processImages.optimizeImage({
      buffer: backgroundBanner.data,
      folder: backgroundStrategy.folder,
      desktopSize: backgroundStrategy.desktopSize,
      mobileSize: backgroundStrategy.mobileSize,
    });

    const resources = {
      titleImageDesktop: titleUrls.desktopUrl,
      titleImageMobile: titleUrls.mobileUrl,
      backgroundDesktop: backgroundUrls.desktopUrl,
      backgroundMobile: backgroundUrls.mobileUrl,
      name,
      status,
    };

    const banner = await models.Banner.create(resources);
    return banner;
  }

  async update({ id, changes }) {
    const banner = await this.findOne({ id });

    if (!banner) {
      throw new boom.notFound("Banner not found");
    }

    const newBanner = await banner.update(changes);
    // await newBanner.save();
    return newBanner;
  }

  async updateImages({ id, buffers }) {
    const banner = await this.findOne({ id });

    if (!banner) {
      throw new boom.notFound("Banner not found");
    }

    const { titleBanner, backgroundBanner } = buffers;
    const { titleStrategy, backgroundStrategy } = BANNERS_IMAGE_STRATEGY;

    const bannerImages = {
      background: [banner.backgroundDesktop],
      title: [banner.titleImageDesktop],
    };

    let data = {};

    if (backgroundBanner) {
      const backgroundImages = await this.processImages.updateImage({
        imagesName: [...bannerImages.background],
        options: {
          ...backgroundStrategy,
        },
        buffer: backgroundBanner.data,
      });

      data = {
        ...data,
        backgroundDesktop: backgroundImages.desktopUrl,
        backgroundMobile: backgroundImages.mobileUrl,
      };
    }

    if (titleBanner) {
      const titleImages = await this.processImages.updateImage({
        imagesName: [...bannerImages.title],
        options: {
          ...titleStrategy,
        },
        buffer: titleBanner.data,
      });

      data = {
        ...data,
        titleImageDesktop: titleImages.desktopUrl,
        titleImageMobile: titleImages.mobileUrl,
      };
    }

    const newBanner = await banner.update(data);

    return newBanner;
  }

  async delete({ id }) {
    const banner = await this.findOne({ id });
    const { globalFolder } = BANNERS_IMAGE_STRATEGY;

    if (!banner) {
      throw new boom.notFound("Banner not found");
    }

    const imagesNames = [banner.backgroundDesktop, banner.titleImageDesktop];

    let images = [];

    for (const image of imagesNames) {
      const imageId = image.split("/").pop();
      images.push(`${globalFolder}/${imageId}`);
    }

    await this.processImages.deleteImages({ images });

    await banner.destroy();
    return banner;
  }
}

module.exports = BannerService;
