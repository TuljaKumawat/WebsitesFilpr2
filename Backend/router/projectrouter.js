const express = require("express");
const router = express.Router();
const controller = require('../Controllers/projectcontroller'); // ✔ correct folder
const upload = require("../middleware/upload"); // your multer middleware

router.post("/add", upload.single("image"), controller.addProject);
router.get("/", controller.getProjects);  // <-- IMPORTANT
router.get("/:id", controller.getProjectById);
router.delete("/:id", controller.deleteProject);

module.exports = router;
