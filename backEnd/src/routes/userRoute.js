const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer();

router.post('/register', upload.none(), userController.register);
router.post('/login', userController.login);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/resetPassword', userController.resetPassword);
router.post('/logout', userController.logout);
router.get('/getusers', authMiddleware, userController.getAllusers);

module.exports = router;