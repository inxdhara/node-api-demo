module.exports = (sequelize, Sequelize) => {
    const RoleUser = sequelize.define('role_user', {
        role_id: {
            type: Sequelize.INTEGER(10),
        },
        user_id: {
            type: Sequelize.INTEGER(10),
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return RoleUser;
}