// Import Model
const Acheteur = require('../models').Acheteur;

/**
 * 
 * List all acheteurs
 */
exports.list_acheteur = (req, res, next) => {
        Acheteur.findAll({})
            .then(acheteurs => res.status(200).json(acheteurs))
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail acheteur
     */
exports.detail_acheteur = (req, res, next) => {
    const id = req.params.id;
    Acheteur.findByPk(id)
        .then(acheteur => res.status(200).json(acheteur))
        .catch(err => console.log(err))
}

/**
 * Add a acheteur
 */
exports.add_acheteur = (req, res, next) => {
    const acheteur = req.body;
    Acheteur.create(acheteur)
        .then(acheteurCreated => res.status(201).json(acheteurCreated))
        .catch(err => console.log(err))
}

/**
 * Edit a acheteur
 */
exports.edit_acheteur = (req, res, next) => {
    const id = req.params.id;
    const acheteur = req.body;
    Acheteur.update(acheteur, {
            where: {
                id: id
            }
        })
        .then(acheteurEdited => res.status(201).json(acheteurEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a acheteur
 */
exports.delete_acheteur = (req, res, next) => {
    const id = req.params.id;
    Acheteur.destroy({
            where: {
                id: id
            }
        })
        .then(acheteurDeleted => res.status(200).json({ message: `Acheteur Deleted ${acheteurDeleted}` }))
        .catch(err => console.log(err))
}