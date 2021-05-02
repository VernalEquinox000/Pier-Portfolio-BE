const mongoose = require("mongoose");
const PierSchema = require("../schema/pierSchema");
const PierModel = mongoose.model("Pier", PierSchema);

const addPier = async (req, res, next) => {
  try {
    const theFirstAndOnlyPier = new PierModel(req.body);
    const { _id } = await theFirstAndOnlyPier.save();
    res.status(201).send(theFirstAndOnlyPier);
  } catch (error) {
    next(error);
  }
};

const getPier = async (req, res, next) => {
  try {
    const pier = "Pierdomenico";
    let theSameGreatPier = await PierModel.findOne({ name: pier });
    if (theSameGreatPier) {
      res.send(theSameGreatPier);
    } else {
      const error = new Error();
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addPier, getPier };
