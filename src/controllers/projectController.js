const mongoose = require("mongoose");
const projectSchema = require("../schema/projectSchema");
const projectModel = mongoose.model("project", projectSchema);

const addProject = async (req, res, next) => {
  try {
    const project = new projectModel(req.body);
    const { _id } = await project.save();
    res.status(201).send(project);
  } catch (error) {
    next(error);
  }
};

const getProjects = async (req, res, next) => {
  try {
    const project = projectModel.find();
  } catch (error) {
    next(error);
  }
};

module.exports = { addProject, getProjects };
