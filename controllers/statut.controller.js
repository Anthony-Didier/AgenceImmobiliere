// Import Model
const Statut = require('../models').Statut;

/**
 * 
 * List all statuts
 */
exports.list_statut = (req, res, next) => {
        Statut.findAll({})
            .then(statuts => res.status(200).json(statuts))
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail statut
     */
exports.detail_statut = (req, res, next) => {
    const id = req.params.id;
    Statut.findByPk(id)
        .then(statut => res.status(200).json(statut))
        .catch(err => console.log(err))
}

/**
 * Add a statut
 */
exports.add_statut = (req, res, next) => {
    const statut = req.body;
    Statut.create(statut)
        .then(statutCreated => res.status(201).json(statutCreated))
        .catch(err => console.log(err))
}

/**
 * Edit a statut
 */
exports.edit_statut = (req, res, next) => {
    const id = req.params.id;
    const statut = req.body;
    Statut.update(statut, {
            where: {
                id: id
            }
        })
        .then(statutEdited => res.status(201).json(statutEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a statut
 */
exports.delete_statut = (req, res, next) => {
    const id = req.params.id;
    Statut.destroy({
            where: {
                id: id
            }
        })
        .then(statutDeleted => res.status(200).json({ message: `Statut Deleted ${statutDeleted}` }))
        .catch(err => console.log(err))
}