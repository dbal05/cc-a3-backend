/**
 * MovieController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getMovies889: async function(req, res) {
        // get params from req
        // query Movie with params from req
        // return results
        var Movies = await Movie.find().populate('actors');
        return res.json({movies: movies});
    },

    getMovieById889: async function(req, res) {
        var id = req.query.id;
        var movie = await Movie.find({
            id: id
        }).populate('actors');

        return res.json({movie: movie});
    },

    getMovieByTitle889: async function(req, res) {
        var title = req.query.title;
        var movie = await Movie.find({
            title: {contains: title}
        }).populate('actors');

        return res.json({
            movie: movie
        });
    },

    getMoviesByYear889: async function(req, res) {
        var minYear = req.query.minYear;
        var maxYear = req.query.maxYear;
        var movies;
        if (minYear && maxYear) {
            movies = await Movie.find({
                year: {'<=': maxYear, '>=': minYear} 
            }).populate('actors');
        } else if (minYear) {
            movies = await Movie.find({
                year: {'>=': minYear} 
            }).populate('actors');
        } else if (maxYear) { 
            movies = await Movie.find({
                year: {'<=': maxYear} 
            }).populate('actors');
        }

        return res.json({
            movies: movies
        });
    },

    getMoviesByRuntime889: async function(req, res) {
        var runtime = req.query.runtime;
        var movies = await Movie.find({
            runtime: runtime
        }).populate('actors');

        return res.json({
            movies: movies
        });
    },

    getMoviesByCountry889: async function(req, res) {
        var country = req.query.country;
        var movies = await Movie.find({
            release_country: {contains: country}
        }).populate('actors');

        return res.json({
            movies: movies
        });
    },
    
    getMoviesByLanguage889: async function(req, res) {
        var language = req.query.language;
        var movies = await Movie.find({
            language: {contains: language}
        }).populate('actors');

        return res.json({
            movies: movies
        });
    },

    addActorForMovieById889: async function(req, res) {
        var actorId = req.body.actorId;
        var movieId = req.body.movieId;

        await Movie.addToCollection(movieId, 'actors', actorId);
        var movie = await Movie.find({
            id: movieId
        }).populate('actors');

        return res.json({
            movie: movie
        });
    },

    deleteMovieById889: async function(req, res) {
        var id = req.query.id;
        var destroyedMovie = await Movie.destroy({
            id: id
        });
        
        return res.json({movie: destroyedMovie});
    }, 
};

