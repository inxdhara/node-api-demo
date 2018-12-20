module.exports = (sequelize, Sequelize) => {
    const Cast = sequelize.define('cast', {
        religion_id: {
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

    return Cast;
}