// Import Model
const Bien = require('../models').Bien;
const Acheteur = require('../models').Acheteur;
const DateAchat = require('../models').DateAchat;
const Keyword = require('../models').Keyword;
const KeywordBien = require('../models').KeywordBien;
const Caracteristique = require('../models').Caracteristique;
const CaracteristiqueBien = require('../models').CaracteristiqueBien;

const sequelize = require('sequelize')


/**
 * 
 * List all biens
 */
exports.list_bien = (req, res, next) => {
    Bien.findAll({
            attributes: [],
            include: [{
                model: Acheteur,
                attributes: ['id', [sequelize.col('Acheteur.firstname'), 'firstname'],
                    [sequelize.col('Acheteur.name'), 'name'],
                    [sequelize.fn('CONCAT', sequelize.literal('Acheteur.firstname'), ' ', sequelize.literal('Acheteur.name')), 'fullname']
                ],
                through: {
                    model: DateAchat,
                    attributes: []
                }
            }, {
                model: Keyword,
                attributes: ['name'],
                through: {
                    model: KeywordBien,
                    attributes: []
                }
            }, {
                model: Caracteristique,
                attributes: ['name'],
                through: {
                    model: CaracteristiqueBien,
                    attributes: []
                }
            }]
        })
        .then(biens => res.status(200).json(biens))
        .catch(err => console.log(err))
}

/**
 * Add a bien
 */
exports.add_bien = (req, res, next) => {
        const bien = req.body;
        Bien.create(bien)
            .then(bienCreated => {
                if (req.body.Acheteur.length > 0 && req.body.Keyword.length > 0 && req.body.Caracteristique.length > 0) {
                    bienCreated.setAcheteurs(req.body.Acheteurs)
                    bienCreated.setKeywords(req.body.Keywords)
                    bienCreated.setCaracteristiques(req.body.Caracteristiques)
                        .then(() => res.status(201).json(bienCreated))
                        .catch(err => console.log(err))
                } else {
                    res.status(201).json(bienCreated)
                }
            })
            .catch(err => console.log(err))
    }
    /**
     * 
     * Detail bien
     */
exports.detail_bien = (req, res, next) => {
    const id = req.params.id;
    Bien.findByPk(id, {
            attributes: [],
            include: [{
                model: Acheteur,
                attributes: ['id', [sequelize.col('Acheteur.firstname'), 'firstname'],
                    [sequelize.col('Acheteur.name'), 'name'],
                    [sequelize.fn('CONCAT', sequelize.literal('Acheteur.firstname'), ' ', sequelize.literal('Acheteur.name')), 'fullname']
                ],
                through: {
                    model: DateAchat,
                    attributes: []
                }
            }, {
                model: Keyword,
                attributes: ['id', 'name'],
                through: {
                    model: KeywordBien,
                    attributes: []
                }
            }, {
                model: Caracteristique,
                attributes: ['id', 'name'],
                through: {
                    model: CaracteristiqueBien,
                    attributes: []
                }
            }]
        })
        .then(bien => res.status(200).json(bien))
        .catch(err => console.log(err))
}

/**
 * Edit a bien
 */
exports.edit_bien = (req, res, next) => {
    const id = req.params.id;
    const bien = req.body;
    Bien.update(bien, {
            where: {
                id: id
            }
        })
        .then(bienEdited => res.status(201).json(bienEdited))
        .catch(err => console.log(err))
}

/**
 * Delete a bien
 */
exports.delete_bien = (req, res, next) => {
    const id = req.params.id;
    Bien.destroy({
            where: {
                id: id
            }
        })
        .then(bienDeleted => res.status(200).json({ message: `Bien Deleted ${bienDeleted}` }))
        .catch(err => console.log(err))
}