module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define('city', {
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

    return City;
}