module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define('news', {
        news_category_id: {
            type: Sequelize.INTEGER(10),
        },
        user_id: {
            type: Sequelize.INTEGER(10),
        },
        title: {
            type: Sequelize.STRING(100),
        },
        news_detail: {
            type: Sequelize.TEXT,
        },
        year: {
            type: Sequelize.INTEGER,
        },
        status: {
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return News;
}