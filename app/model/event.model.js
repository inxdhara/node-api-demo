module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define('event', {
        user_id: {
            type: Sequelize.INTEGER(10),
        },
        event_title: {
            type: Sequelize.STRING,
        },
        event_desc: {
            type: Sequelize.TEXT,
        },
        year: {
            type: Sequelize.INTEGER,
        },
        datetime: {
            type: Sequelize.DATE,
        },
        address: {
            type: Sequelize.STRING,
        },
        address1: {
            type: Sequelize.STRING,
        },
        landmark: {
            type: Sequelize.STRING,
        },
        city_id: {
            type: Sequelize.INTEGER(10),
        },
        state_id: {
            type: Sequelize.INTEGER(10),
        },
        zipcode: {
            type: Sequelize.INTEGER(6),
        },
        lat: {
            type: Sequelize.DECIMAL(10,8),
        },
        lng: {
            type: Sequelize.DECIMAL(11,8),
        },
        status: {
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return Event;
}