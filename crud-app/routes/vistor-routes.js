const express = require("express");
const router = express.Router();

const vistorController = require("../controllers/vistor-controller");

router.get("/", vistorController. getAllVistor);
router.get("/:id",vistorController.getById);
router.post("/", vistorController.addVistor);
router.put("/:id", vistorController.updateVistor);
router.delete("/:id", vistorController.deleteVistor);



module.exports = router;