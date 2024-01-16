const asyncHandler = require("../middleware/async");
const Motors = require("../models/motors");

exports.getAllMotors = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 20;

  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);

  const total = await Motors.countDocuments();

  const motors = await Motors.find()
    .skip(page * limit - limit)
    .limit(limit);
  res.status(201).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: motors,
  });
});

exports.createNewMotor = asyncHandler(async (req, res, next) => {
  const newMotor = await Motors.create({
    name: req.body.name,
    company: req.body.company,
    cost: req.body.cost,
    licence: req.body.licence,
    people:req.body.people,
    location:req.body.location
  });

  res.status(201).json({
    success: true,
    data: newMotor,
  });
});

// to get data
exports.getByMotorID = asyncHandler(async (req, res, next) => {
  const motor = await Motors.findById(req.params.id);

  res.status(201).json({
    success: true,
    data: motor,
  });
});
//to delete data
exports.delateMotor = asyncHandler(async (req, res) => {
  await Motors.findByIdAndDelete(req.params.id);
  res.status(200).json("Data removed successfully");
});

//to update data
exports.updateMotor = asyncHandler(async (req, res) => {
  const updatedData = {
    name: req.body.name,
    company: req.body.company,
    cost: req.body.cost,
    licence: req.body.licence,
    people:req.body.people,
    location:req.body.location
  };
  const updatedMotor = await Motors.findByIdAndUpdate(
    req.params.id,
    updatedData
  );
  res.status(200).json({
    success: true,
    data: updatedMotor,
  });
});
