const router = require("express").Router();
// const pairingController = require("../../controllers/pairingController");
const axios = require("axios");

const apiKey = 'a7065834b36529e3cf15043f9180d627'

const queryURL = 'https://www.food2fork.com/api/search?key=' +
apiKey + '&q='; 

router.get("/all", (req, res) => {
    axios.get(queryURL + req.query.q)
        .then(results => res.json(results.data.response.docs))
        .catch(error => console.log(req.json(error)))
});

// router.route("/")
//     .get(pairingController.findAll)
//     .post(pairingController.create);

// router.route("/:id")
//     .get(pairingController.findById)
//     // .put(pairingController.update)
//     .delete(pairingController.remove)

module.exports = router;