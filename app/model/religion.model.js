module.exports = (sequelize, Sequelize) => {
    const Religion = sequelize.define('religion', {
        name: {
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

    return Religion;
}