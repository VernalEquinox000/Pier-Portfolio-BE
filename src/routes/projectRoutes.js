const { addProject, getProjects } = require("../controllers/projectController");
const routes = (app) => {
  app.route("/about/projects").post(addProject);
  app.route("/about/projects").get(getProjects);
};

module.exports = routes;
