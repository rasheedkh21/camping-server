const { Router } = require("express");
const {
  createNewMotor,
  delateMotor,
  getByMotorID,
  getAllMotors,
  updateMotor,
} = require("../controller/motors.controller");

const router = Router();

router.get("/getAllMotors", getAllMotors)
router.post("/addNewMotor", createNewMotor);
router.get("/:id", getByMotorID)
router.delete("/:id", delateMotor);
router.put("/:id",updateMotor)
module.exports = router;
