const { addPier, getPier } = require("../controllers/pierController");
const routes = (app) => {
  app.route("/about").post(addPier);
  app.route("/about/Pierdomenico").get(getPier);
};

module.exports = routes;
