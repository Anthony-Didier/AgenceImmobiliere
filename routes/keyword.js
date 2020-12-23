const express = require('express');
const router = express.Router();
const keyword_controller = require('../controllers/keyword.controller');

router.get('/', keyword_controller.list_keyword);
router.get('/:id', keyword_controller.detail_keyword);
router.post('/', keyword_controller.add_keyword);
router.put('/:id', keyword_controller.edit_keyword);
router.delete('/:id', keyword_controller.delete_keyword);

module.exports = router;