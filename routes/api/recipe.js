// const router = require("express").Router();
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

//To get recipes use:  https://www.food2fork.com/api/get 
// recipe: List of Recipe Parameters ->
// 	image_url: URL of the image
// 	source_url: Original Url of the recipe on the publisher's site
// 	f2f_url: Url of the recipe on Food2Fork.com
// 	title: Title of the recipe
// 	publisher: Name of the Publisher
// 	publisher_url: Base url of the publisher
// 	social_rank: The Social Ranking of the Recipe (As determined by our Ranking Algorithm)
//     ingredients: The ingredients of this recipe
    
// router.route("/")
//     .get(pairingController.findAll)
//     .post(pairingController.create);

// router.route("/:id")
//     .get(pairingController.findById)
//     // .put(pairingController.update)
//     .delete(pairingController.remove)

module.exports = router;