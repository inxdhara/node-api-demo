const db = require('../config/db.config.js');
const CandidatePoliticalCareer = db.candidatePoliticalCareer;
const Op = db.Sequelize.Op

// Get user detail by user id
exports.candidatePoliticalCareerContent = (req, res) => {
    let limit = 10;   // number of records per page
    let offset = 0;
    CandidatePoliticalCareer.findAndCountAll().then((data) => {
        let page = req.body.page;   // page number
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);
        CandidatePoliticalCareer.findAll({
            attributes: ['id', 'user_id', 'start_period', 'end_period', 'position', 'desc'],
            limit: limit,
            offset: offset,
        }).then(candidateatas => {
            res.status(200).json({
                status: 1, 
                message: "success",
                data: candidateatas,
                totalCount: data.count, 
                pages: pages
            });
        });
    }).catch(err => {
		res.status(500).json({
			status: 0,
			message: err
		});
	});
}