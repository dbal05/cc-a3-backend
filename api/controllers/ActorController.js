/**
 * ActorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getActors889: async function(req, res) {
        // get params from req
        // query Actor with params from req
        // return results
        var actors = await Actor.find();
        return res.json({actors: actors});
    },

    getActorById889: async function(req, res) {
        var id = req.query.id;
        var actor = await Actor.find({
            id: id
        });

        return res.json({actor: actor});
    },

    getActorByName889: async function(req, res) {
        var firstname = req.query.firstname;
        var lastname = req.query.lastname;
        var actor = await Actor.find({
            firstname: firstname,
            lastname: lastname 
        });

        return res.json({
            actor: actor
        });
    },

    addMovieForActorById889: async function(req, res) {
        var actorId = req.body.actorId;
        var movieId = req.body.movieId;

        await Actor.addToCollection(actorId, 'movies', movieId);
        var actor = await Actor.find({
            id: id
        });

        return res.json({
            actor: actor
        });
    }, 

    deleteActorById889: async function(req, res) {
        var id = req.query.id;
        var destroyedActor = await Actor.destroy({
            id: id
        });

        return res.json({actor: destroyedActor});
    }, 

};

