const { addPier, retrievePier } = require("../controllers/pierController");
const routes = (app) => {
  app.route("/about").post(addPier);
  app.route("/about/Pierdomenico").get(retrievePier);
};

module.exports = routes;
