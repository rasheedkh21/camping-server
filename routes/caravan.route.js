const { Router } = require("express");
const {
  getAllCaravan,
  createNewCaravan,
  getByCaravanID,
  delateCaravan,
  updateCaravan,
} = require("../controller/caravan.controller");

const router = Router();
router.get("/getAllCaravan", getAllCaravan);
router.post("/addNewCaravan", createNewCaravan);
router.get("/:id", getByCaravanID);
router.delete("/:id", delateCaravan);
router.put("/:id", updateCaravan);

module.exports = router;
