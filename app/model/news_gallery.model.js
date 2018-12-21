module.exports = (sequelize, Sequelize) => {
    const NewsGallery = sequelize.define('news_gallery', {
        news_category_id: {
            type: Sequelize.INTEGER(10),
        },
        news_id: {
            type: Sequelize.INTEGER(10),
        },
        media_type: {
            type: Sequelize.STRING(100),
        },
        status: {
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return NewsGallery;
}