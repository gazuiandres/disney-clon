require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  isProd: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === 'test',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbType: process.env.DB,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  userAdmin: {
    username: process.env.ADMIN_USERNAME || "admin",
    email: process.env.ADMIN_USER_EMAIL || "admin@admin.com",
    password: process.env.ADMIN_USER_PASSWORD || "admin",
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  jwtSecret: process.env.SECRET_JWT || "jwtDefault",
  test: {
    dbUser: process.env.TEST_DB_USER,
    dbPassword: process.env.TEST_DB_PASSWORD,
    dbType: process.env.TEST_DB,
    dbHost: process.env.TEST_DB_HOST,
    dbName: process.env.TEST_DB_NAME,
    dbPort: process.env.TEST_DB_PORT,
    dbUrl: process.env.TEST_DATABASE_URL,
  },
};

module.exports = { config };
