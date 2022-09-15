require("dotenv").config();
module.exports = {
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  env: {
    proxyApi: process.env.NEXT_PUBLIC_API_SERVER,
  },
};
