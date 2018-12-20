module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('role', {
        name: {
            type: Sequelize.STRING(50),
        },
        slug: {
            type: Sequelize.STRING(50),
        },
        status: {
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return Role;
}