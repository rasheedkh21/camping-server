const asyncHandler = require("../middleware/async");
const Caravan = require("../models/caravan");

exports.getAllCaravan = asyncHandler(async (req, res, next) => {
  const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 3;

  const limit = parseInt(req.query.limit || pageLimit);
  const page = parseInt(req.query.page || 1);

  const total = await Caravan.countDocuments();

  const caravans = await Caravan.find()
    .skip(page * limit - limit)
    .limit(limit);
  res.status(201).json({
    success: true,
    pageCount: Math.ceil(total / limit),
    currentPage: page,
    nextPage: Math.ceil(total / limit) < page + 1 ? null : page + 1,
    data: caravans,
  });
});

exports.createNewCaravan = asyncHandler(async (req, res, next) => {
  const newCaravan = await Caravan.create({
    name: req.body.name,
    company: req.body.company,
    cost: req.body.cost,
    licence: req.body.licence,
  });

  res.status(201).json({
    success: true,
    data: newCaravan,
  });
});

// to get data
exports.getByCaravanID = asyncHandler(async (req, res, next) => {
  const caravan = await Caravan.findById(req.params.id);

  res.status(201).json({
    success: true,
    data: caravan,
  });
});
//to delete data
exports.delateCaravan = asyncHandler(async (req, res) => {
  const caravanDataID = req.params.id;
  const deletedCaravanData = await Motors.findByIdAndDelete(caravanDataID);
  res.status(201).json("Data removed successfully");
});

//to update data

//to update data
exports.updateCaravan = asyncHandler(async (req, res) => {
  const updatedData = {
      name: req.body.name,
      company: req.body.company,
      cost: req.body.cost  ,
      licence: req.body.licence,
  };
  const updatedCaravan = await Caravan.findByIdAndUpdate(req.params.id, updatedData);
  res.status(200).json({
      success: true, 
      data: updatedCaravan,
  });
});