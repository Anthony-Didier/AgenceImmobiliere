const express = require('express');
const router = express.Router();
const statut_controller = require('../controllers/statut.controller');

router.get('/', statut_controller.list_statut);
router.get('/:id', statut_controller.detail_statut);
router.post('/', statut_controller.add_statut);
router.put('/:id', statut_controller.edit_statut);
router.delete('/:id', statut_controller.delete_statut);

module.exports = router;