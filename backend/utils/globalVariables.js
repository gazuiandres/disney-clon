module.exports = {
  // SCHEMA OF DATA TO OPTIMAZE AND SAVE IMAGES

  AUDIOVISUAL_IMAGE_STRATEGY: {
    globalFolder: 'audiovisuals',
    backgroundStrategy: {
      folder: "audiovisuals",
      desktopSize: {
        width: null,
        height: null,
      },
      mobileSize: {
        width: null,
        height: null,
      },
    },

    thumbnailStrategy: {
      folder: "audiovisuals",
      desktopSize: {
        width: 267,
        height: 150,
      },
      mobileSize: {
        width: 134,
        height: 75,
      },
    },

    logoStrategy: {
      folder: "audiovisuals",
      desktopSize: {
        width: 341,
        height: 191,
      },
      mobileSize: {
        width: 126,
        height: 70,
      },
    },
  },

  BANNERS_IMAGE_STRATEGY: {
    globalFolder: 'banners',
    titleStrategy: {
      folder: "banners",
      desktopSize: {
        width: 1126,
        height: 288,
      },
      mobileSize: {
        width: 287,
        height: 73,
      },
    },
    backgroundStrategy: {
      folder: "banners",
      desktopSize: {
        width: 1126,
        height: 288,
      },
      mobileSize: {
        width: 287,
        height: 73,
      },
    },
  },
};
