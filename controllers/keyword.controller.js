// Import Model
const Keyword = require('../models').Keyword;

/**
 * 
 * List all keywords
 */
exports.list_keyword = (req, res, next) => {
        Keyword.findAll({})
            .then(keywords => res.status(200).json(keywords))
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail keyword
     */
exports.detail_keyword = (req, res, next) => {
    const id = req.params.id;
    Keyword.findByPk(id)
        .then(keyword => res.status(200).json(keyword))
        .catch(err => console.log(err))
}

/**
 * Add a keyword
 */
exports.add_keyword = (req, res, next) => {
    const keyword = req.body;
    Keyword.create(keyword)
        .then(keywordCreated => res.status(201).json(keywordCreated))
        .catch(err => console.log(err))
}

/**
 * Edit a keyword
 */
exports.edit_keyword = (req, res, next) => {
    const id = req.params.id;
    const keyword = req.body;
    Keyword.update(keyword, {
            where: {
                id: id
            }
        })
        .then(keywordEdited => res.status(201).json(keywordEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a keyword
 */
exports.delete_keyword = (req, res, next) => {
    const id = req.params.id;
    Keyword.destroy({
            where: {
                id: id
            }
        })
        .then(keywordDeleted => res.status(200).json({ message: `Keyword Deleted ${keywordDeleted}` }))
        .catch(err => console.log(err))
}