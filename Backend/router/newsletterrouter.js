const express = require("express");
const router = express.Router();
const newsletterController = require("../Controllers/newslettercontroller");

router.post("/add", newsletterController.addSubscriber);
router.get("/all", newsletterController.getSubscribers);

module.exports = router;
