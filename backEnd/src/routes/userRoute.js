const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const CategoryController = require('../controllers/categoryController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/resetPassword', userController.resetPassword);
router.post('/logout', userController.logout);
router.get('/getusers', authMiddleware, userController.getAllusers);

module.exports = router;