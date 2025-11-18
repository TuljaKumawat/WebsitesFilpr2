const express = require('express');
const router = express.Router();
const projectController = require('../Controllers/projectcontroller');
const upload = require('../middleware/upload'); // multer instance

// upload.single("image") expects form key 'image'
router.post('/add', upload.single("image"), projectController.addProject);
router.get('/all', projectController.getProjects);
router.get('/:id', projectController.getProjectById);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
