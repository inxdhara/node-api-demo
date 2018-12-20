module.exports = (sequelize, Sequelize) => {
    const Constituency = sequelize.define('constituency', {
        name: {
            type: Sequelize.STRING(100),
        },
        constituency_number: {
            type: Sequelize.INTEGER,
        },
        state_id: {
            type: Sequelize.INTEGER(10),
        },
        district_id:{
            type: Sequelize.BOOLEAN,
        },
        type: {
            type: Sequelize.ENUM('central'),
            defaultValue: 'central'
        },
        status: {
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return Constituency;
}