const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contactcontroller');

// submit form
router.post('/add', contactController.addContact);

// get all
router.get('/all', contactController.getContacts);

module.exports = router;
