let streamifier = require("streamifier");
const { cloudinary } = require("../../utils/cloudinary");
class ProcessImages {

  async uploadImages(buffer, folder) {
    return new Promise((resolve, reject) => {
      let cld_upload_stream = cloudinary.uploader.upload_stream(
        {
          folder,
        },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );

      streamifier.createReadStream(buffer).pipe(cld_upload_stream);
    });
  }

  async optimizeImage({ buffer, folder, desktopSize, mobileSize }) {
    try {
      const response = await this.uploadImages(buffer, folder);

      const desktopUrl = cloudinary.url(response.public_id, {
        width: desktopSize.width,
        height: desktopSize.height,
        fetch_format: "auto",
        crop: "fill",
      });

      const mobileUrl = cloudinary.url(response.public_id, {
        width: mobileSize.width,
        height: mobileSize.height,
        fetch_format: "auto",
        crop: "fill",
      });

      return {
        desktopUrl,
        mobileUrl,
      };
    } catch (error) {
      throw new Error("Error uploading image");
    }
  }

  async updateImage({ imagesName, options, buffer }) {
    const { folder, desktopSize, mobileSize } = options;

    try {
      let images = [];

      for (const image of imagesName) {
        const imageId = image.split("/").pop();
        images.push(`${folder}/${imageId}`);
      }

      await this.deleteImages({ images });

      return await this.optimizeImage({
        buffer,
        desktopSize,
        mobileSize,
        folder,
      });
    } catch (error) {
      throw new Error("Error updating images");
    }
  }

  async deleteImages({ images }) {
    return new Promise((resolve, reject) => {
      cloudinary.api.delete_resources(images, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }
}

module.exports = ProcessImages;
