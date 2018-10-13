const router = require("express").Router();
const movieRoutes = require("./movie");
const recipeRoutes = require("./recipe");
const wineRoutes = require("./wine");
const savedRoutes = require("./saved");

router.use("/movie", movieRoutes);
router.use("/recipe", recipeRoutes);
router.use("/wine", wineRoutes);
router.use("/saved", savedRoutes)

module.exports = router;