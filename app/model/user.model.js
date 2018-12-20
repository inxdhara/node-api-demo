module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        full_name: {
            type: Sequelize.STRING(100),
        },
        username: {
            type: Sequelize.STRING(30),
            unique: true
        },
        email: {
            type: Sequelize.STRING(100),
            unique: true,
        },
        password: {
            type: Sequelize.STRING
        },
        google_id:{
            type: Sequelize.STRING
        },
        facebook_id:{
            type: Sequelize.STRING
        },
        country_code:{
            type: Sequelize.STRING(4),
        },
        phone_no:{
            type: Sequelize.INTEGER(10),
            unique: true,
        },
        gender:{
            type: Sequelize.ENUM('male'),
            defaultValue: 'male'
        },
        birth_date:{
            type: Sequelize.DATE,
        },
        region_id:{
            type: Sequelize.INTEGER(10),
        },
        cast_id:{
            type: Sequelize.INTEGER(10),
        },
        city_id:{
            type: Sequelize.INTEGER(10),
        },
        about:{
            type: Sequelize.TEXT,
        },
        education_detail:{
            type: Sequelize.TEXT,
        },
        is_volunteer:{
            type: Sequelize.BOOLEAN,
        },
        photo:{
            type: Sequelize.STRING(100),
        },
        login_otp:{
            type: Sequelize.INTEGER,
        },
        login_otp_created_at:{
            type: Sequelize.DATE,
        },
        status:{
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        app_id:{
            type: Sequelize.STRING
        },
        remember_token:{
            type: Sequelize.STRING(100)
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return User;
}