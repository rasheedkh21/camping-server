const { Router } = require("express");
const {
  getAllUsedCar,
  createNewUsedCar,
  getByUsedCarID,
  delateUsedCar,
  updateUsedCar,
} = require("../controller/usedCar.controller");

const router = Router();
router.get("/getAllUsedCar", getAllUsedCar);
router.post("/addNewUsedCar", createNewUsedCar);
router.get("/:id", getByUsedCarID);
router.delete("/:id", delateUsedCar);
router.put("/:id", updateUsedCar);

module.exports = router;
