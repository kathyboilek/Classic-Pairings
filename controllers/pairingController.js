const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Pairing
            .find(req.query)
            .sort({data: -1})
            // add database name in .then function
            .then(dbNYT => res.json(dbNYT))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res){
        db.Pairing
            .findById(req.params.id)
            .then(dbNYT => res.json(dbNYT))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Pairing
            .create(req.body)
            .then(dbNYT => res.json(dbNYT))
            .catch(err => res.status(422).json(err))
    },
    // update: function(req, res){
    //     db.Pairing
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(dbNYT => res.json(dbNYT))
    //         .catch(err => res.status(422).json(err));
    // },
    remove: function(req, res){
        db.Pairing
            .findById({ _id: req.params.id })
            .then(dbNYT => dbNYT.remove())
            .then(dbNYT => res.json(dbNYT))
            .catch(err => res.status(422).json(err));
    }
};