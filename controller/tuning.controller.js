const asyncHandler = require("../middleware/async");
const Tuning = require("../models/tuning");

exports.getAllTuning = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 3;

  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);

  const total = await Tuning.countDocuments();

  const tuningcars = await Tuning.find()
    .skip(page * limit - limit)
    .limit(limit);
  res.status(201).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: tuningcars,
  });
});

exports.createNewTuning = asyncHandler(async (req, res, next) => {
  const newTuning = await Tuning.create({
    name: req.body.name,
    company: req.body.company,
    cost: req.body.cost,
    licence: req.body.licence,
    people:req.body.people,
    location:req.body.location
  });

  res.status(201).json({
    success: true,
    data: newTuning,
  });
});

// to get data
exports.getByTuningID = asyncHandler(async (req, res, next) => {
  const tuningCar = await Tuning.findById(req.params.id);

  res.status(201).json({
    success: true,
    data: tuningCar,
  });
});

//to delete data
exports.delateTuning = asyncHandler(async (req, res) => {
  const tuningCarDataID = req.params.id;
  await Tuning.findByIdAndDelete(req.params.id);
  res.status(200).json("Data removed successfully");
});

//to update data
exports.updateTuning = asyncHandler(async (req, res) => {
  const updatedData = {
      name: req.body.name,
      company: req.body.company,
      cost: req.body.cost  ,
      licence: req.body.licence,
      people:req.body.people,
      location:req.body.location
  };
  const updatedTuning = await Tuning.findByIdAndUpdate(req.params.id, updatedData);
  res.status(200).json({
      success: true, 
      data: updatedTuning,
  });
});
