const router = require("express").Router();
// const articleController = require("../../controllers/pairingController");
const axios = require("axios");

const apiKey = '3aa60972678db4e252c939f92a674cb94aa10572'

const queryURL = 'http://api-public.guidebox.com/v2/?api-key=' +
apiKey + '&q='; 

router.get("/all", (req, res) => {
    axios.get(queryURL + req.query.q)
        .then(results => res.json(results.data.response.docs))
        .catch(error => console.log(req.json(error)))
});

// router.route("/")
//     .get(articleController.findAll)
//     .post(articleController.create);

// router.route("/:id")
//     .get(articleController.findById)
//     // .put(articleController.update)
//     .delete(articleController.remove)

module.exports = router;