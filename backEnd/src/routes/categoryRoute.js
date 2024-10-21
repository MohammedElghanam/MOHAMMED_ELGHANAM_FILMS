const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const CategoryController = require('../controllers/categoryController');

router.post('/create', CategoryController.create);
router.get('/read', CategoryController.read);
router.put('/update/:id', CategoryController.update);
router.delete('/delete/:id', CategoryController.delete);

module.exports = router;