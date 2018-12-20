module.exports = (sequelize, Sequelize) => {
    const CandidateConstituency = sequelize.define('candidate_constituency', {
        user_id: {
            type: Sequelize.INTEGER(10),
        },
        constituency_id: {
            type: Sequelize.INTEGER(10),
        },
        party_id: {
            type: Sequelize.INTEGER(10),
        },
        year:{
            type: Sequelize.INTEGER,
        },
        status: {
            type: Sequelize.ENUM('active'),
            defaultValue: 'active'
        },
        is_delete:{
            type: Sequelize.BOOLEAN,
        }
    });

    return CandidateConstituency;
}