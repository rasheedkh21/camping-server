const asyncHandler = require("../middleware/async");
const usedCar = require("../models/usedCar");

exports.getAllUsedCar = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 3;

  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);

  const total = await usedCar.countDocuments();

  const usedCars = await usedCar.find()
    .skip(page * limit - limit)
    .limit(limit);
  res.status(201).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: usedCars,
  });
});

exports.createNewUsedCar = asyncHandler(async (req, res, next) => {
  const newUsedCar = await usedCar.create({
    name: req.body.name,
    company: req.body.company,
    cost: req.body.cost,
    licence: req.body.licence,
    people:req.body.people,
    location:req.body.location
  });

  res.status(201).json({
    success: true,
    data: newUsedCar,
  });
});

// to get data
exports.getByUsedCarID = asyncHandler(async (req, res, next) => {
  const usedcar = await usedCar.findById(req.params.id);

  res.status(201).json({
    success: true,
    data: usedcar,
  });
});
//to delete data
exports.delateUsedCar = asyncHandler(async (req, res) => {
  await usedCar.findByIdAndDelete(req.params.id);
  res.status(200).json("Data removed successfully");
});

//to update data
exports.updateUsedCar = asyncHandler(async (req, res) => {
  const updatedData = {
      name: req.body.name,
      company: req.body.company,
      cost: req.body.cost  ,
      licence: req.body.licence,
      people:req.body.people,
      location:req.body.location
  };
  const updatedUsedCar = await usedCar.findByIdAndUpdate(req.params.id, updatedData);
  res.status(200).json({
      success: true, 
      data: updatedUsedCar,
  });
});