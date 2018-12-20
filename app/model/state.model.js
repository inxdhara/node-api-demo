module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define('state', {
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

    return State;
}