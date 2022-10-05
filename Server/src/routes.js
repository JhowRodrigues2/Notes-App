const express = require("express");
const routes = express.Router();

const AnnotationController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

//Rota Annotations
routes.post("/annotations", AnnotationController.create);

routes.get("/annotations", AnnotationController.read);

routes.delete("/annotations/:id", AnnotationController.delete);
module.exports = routes;
//Rota Priority
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);
// Rota Content
routes.post("/contents/:id", ContentController.update);
