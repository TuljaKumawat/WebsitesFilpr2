const express = require("express");
const router = express.Router();
const controller = require("../controller/projectcontroller");
const upload = require("../middleware/multer"); // your multer middleware

router.post("/add", upload.single("image"), controller.addProject);
router.get("/", controller.getProjects);  // <-- IMPORTANT
router.get("/:id", controller.getProjectById);
router.delete("/:id", controller.deleteProject);

module.exports = router;
