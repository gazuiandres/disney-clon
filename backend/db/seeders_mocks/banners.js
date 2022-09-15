const { config } = require("../../config");


const banners = [
    {
        name: 'Zootopia',
        status: 'published',
        title_image_desktop:`http://localhost:${config.port}/titlebanner/zootopia.png`,
        title_image_mobile: `http://localhost:${config.port}/titlebanner/zootopia.png`,
        background_desktop:`http://localhost:${config.port}/bgbanner/zootopia.jpg`,
        background_mobile: `http://localhost:${config.port}/bgbanner/zootopia.jpg`,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        name: 'Ratatoulle',
        status: 'published',
        title_image_desktop:`http://localhost:${config.port}/titlebanner/ratatoulle.png`,
        title_image_mobile: `http://localhost:${config.port}/titlebanner/ratatoulle.png`,
        background_desktop:`http://localhost:${config.port}/bgbanner/ratatoulle.jpg`,
        background_mobile: `http://localhost:${config.port}/bgbanner/ratatoulle.jpg`,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        name: 'Red',
        status: 'published',
        title_image_desktop:`http://localhost:${config.port}/titlebanner/red.png`,
        title_image_mobile: `http://localhost:${config.port}/titlebanner/red.png`,
        background_desktop:`http://localhost:${config.port}/bgbanner/red.jpg`,
        background_mobile: `http://localhost:${config.port}/bgbanner/red.jpg`,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        name: 'Olé',
        status: 'published',
        title_image_desktop:`http://localhost:${config.port}/titlebanner/ole.png`,
        title_image_mobile: `http://localhost:${config.port}/titlebanner/ole.png`,
        background_desktop:`http://localhost:${config.port}/bgbanner/ole.jpg`,
        background_mobile: `http://localhost:${config.port}/bgbanner/ole.jpg`,
        created_at: new Date(),
        updated_at: new Date(),
    }
]


module.exports = banners