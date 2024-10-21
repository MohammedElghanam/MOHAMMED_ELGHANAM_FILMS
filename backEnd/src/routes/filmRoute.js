const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { filmController, upload } = require('../controllers/filmController') 

router.post('/create', upload.fields([{ name: 'video' }, { name: 'image' }]), filmController.create);
router.get('/read', filmController.read);
router.put('/update/:id', upload.fields([{ name: 'video' }, { name: 'image' }]), filmController.update);
router.delete('/delete/:id', filmController.delete);

module.exports = router;