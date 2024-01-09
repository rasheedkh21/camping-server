const { Router } = require("express");
const {
  getAllTuning,
  createNewTuning,
  getByTuningID,
  delateTuning,
  updateTuning,
} = require("../controller/tuning.controller");

const router = Router();
router.get("/getAllTuning", getAllTuning);
router.post("/addNewTuning", createNewTuning);
router.get("/:id", getByTuningID);
router.delete("/:id", delateTuning);
router.put("/:id", updateTuning);

module.exports = router;
