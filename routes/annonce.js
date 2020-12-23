const express = require('express');
const router = express.Router();
const annonce_controller = require('../controllers/annonce.controller');

router.get('/', annonce_controller.list_annonce);
router.get('/:id', annonce_controller.detail_annonce);
router.post('/', annonce_controller.add_annonce);
router.put('/:id', annonce_controller.edit_annonce);
router.delete('/:id', annonce_controller.delete_annonce);

module.exports = router;