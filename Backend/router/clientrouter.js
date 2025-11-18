const express = require('express');
const router = express.Router();
const clientController = require('../Controllers/clientcontroller');
const upload = require('../middleware/upload'); // multer instance

// Use upload.single('image') to accept file field named 'image'
router.post('/add', upload.single('image'), clientController.addClient);
router.get('/all', clientController.getClients);

module.exports = router;
