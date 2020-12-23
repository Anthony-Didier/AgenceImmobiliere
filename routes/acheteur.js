const express = require('express');
const router = express.Router();
const acheteur_controller = require('../controllers/acheteur.controller');

router.get('/', acheteur_controller.list_acheteur);
router.get('/:id', acheteur_controller.detail_acheteur);
router.post('/', acheteur_controller.add_acheteur);
router.put('/:id', acheteur_controller.edit_acheteur);
router.delete('/:id', acheteur_controller.delete_acheteur);

module.exports = router;