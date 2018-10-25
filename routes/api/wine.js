const router = require("express").Router();
const pairingController = require("../../controllers/pairingController");
const axios = require("axios");

// const apiKey = 'fd16e76533488fd2277da0ba51d1fffe3ad417b7'

// const queryURL = 'https://api.globalwinescore.com/search/.json?api-key=' +
// apiKey + '&q='; 

router.get("/all", (req, res) => {
    axios.get(queryURL + req.query.q)
        .then(results => res.json(results.data.response.docs))
        .catch(error => console.log(req.json(error)))
});

router.route("/")
    .get(pairingController.findAll)
    .post(pairingController.create);

router.route("/:id")
    .get(pairingController.findById)
    // .put(pairingController.update)
    .delete(pairingController.remove)

module.exports = router;