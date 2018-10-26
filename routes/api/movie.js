// const router = require("express").Router();
const pairingController = require("../../controllers/pairingController");
const axios = require("axios");

// const apiKey = '3aa60972678db4e252c939f92a674cb94aa10572'

// const queryURL = 'http://api-public.guidebox.com/v2/?api-key=' +
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
    .put(pairingController.update)
    .delete(pairingController.remove)

module.exports = router;