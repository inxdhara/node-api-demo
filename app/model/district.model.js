module.exports = (sequelize, Sequelize) => {
    const District = sequelize.define('district', {
        state_id: {
            type: Sequelize.INTEGER(10),
        },
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

    return District;
}