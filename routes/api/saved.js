const router = require("express").Router();
const pairingController = require("../../controllers/pairingController");

router.route("/")
    .get(pairingController.findAll)
    .post(pairingController.create);

router.route("/:id")
    .get(pairingController.findById)
    // .put(pairingController.update)
    .delete(pairingController.remove)

module.exports = router;