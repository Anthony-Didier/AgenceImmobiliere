// Import Model
const Annonce = require('../models').Annonce;

/**
 * 
 * List all annonces
 */
exports.list_annonce = (req, res, next) => {
        Annonce.findAll({})
            .then(annonces => res.status(200).json(annonces))
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail annonce
     */
exports.detail_annonce = (req, res, next) => {
    const id = req.params.id;
    Annonce.findByPk(id)
        .then(annonce => res.status(200).json(annonce))
        .catch(err => console.log(err))
}

/**
 * Add a annonce
 */
exports.add_annonce = (req, res, next) => {
    const annonce = req.body;
    Annonce.create(annonce)
        .then(annonceCreated => res.status(201).json(annonceCreated))
        .catch(err => console.log(err))
}

/**
 * Edit a annonce
 */
exports.edit_annonce = (req, res, next) => {
    const id = req.params.id;
    const annonce = req.body;
    Annonce.update(annonce, {
            where: {
                id: id
            }
        })
        .then(annonceEdited => res.status(201).json(annonceEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a annonce
 */
exports.delete_annonce = (req, res, next) => {
    const id = req.params.id;
    Annonce.destroy({
            where: {
                id: id
            }
        })
        .then(annonceDeleted => res.status(200).json({ message: `Annonce Deleted ${annonceDeleted}` }))
        .catch(err => console.log(err))
}