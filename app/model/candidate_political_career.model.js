module.exports = (sequelize, Sequelize) => {
    const CandidatePoliticalCareer = sequelize.define('candidate_political_career', {
        user_id: {
            type: Sequelize.INTEGER(10),
        },
        start_period: {
            type: Sequelize.STRING(50),
        },
        end_period: {
            type: Sequelize.STRING(50),
        },
        position: {
            type: Sequelize.STRING,
        },
        desc: {
            type: Sequelize.TEXT,
        },
        status: {
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return CandidatePoliticalCareer;
}