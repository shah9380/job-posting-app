const express =  require("express");

const jobController = require("../controller/job")

const router = express.Router();

router.post("",jobController.createJob)

router.get("",jobController.getJob)

router.patch("/:id",jobController.updateJob)

router.delete("/:id",jobController.deletePosting)

module.exports = router;

