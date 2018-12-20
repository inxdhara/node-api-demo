const db = require('../config/db.config.js');
const News = db.news;
const Op = db.Sequelize.Op

// Get user detail by user id
exports.newsContent = (req, res) => {
    let limit = 10;   // number of records per page
    let offset = 0;
    News.findAndCountAll({
        where: {user_id: req.userId}
    }).then((data) => {
        let page = req.body.page;   // page number
        //console.log('page',page);
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);
        News.findAll({
            where: {user_id: req.userId},
            limit: limit,
            offset: offset,
        }).then(news => {
            res.status(200).json({
                status: 1, 
                message: "success",
                data: news,
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