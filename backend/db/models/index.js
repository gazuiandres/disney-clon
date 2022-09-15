const { Role, RoleSchema } = require('./role.model')
const { User, UserSchema } = require('./user.model')
const { Category, CategorySchema } = require('./category.model')
const { Audiovisual, AudiovisualSchema } = require('./audiovisual.model')
const { Banner, BannerSchema } = require('./banner.model')
const { CategoryAudiovisual, CategoryAudiovisualSchema } = require('./category-audiovisual.model')



function setupModels(sequelize) {
    // initialize Models

    Role.init(RoleSchema, Role.config(sequelize))
    User.init(UserSchema, User.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize))
    Audiovisual.init(AudiovisualSchema, Audiovisual.config(sequelize))
    Banner.init(BannerSchema, Banner.config(sequelize))
    CategoryAudiovisual.init(CategoryAudiovisualSchema, CategoryAudiovisual.config(sequelize))

    // Relationships
    User.associate(sequelize.models);
    Audiovisual.associate(sequelize.models);
    CategoryAudiovisual.associate(sequelize.models)
}


module.exports = setupModels;