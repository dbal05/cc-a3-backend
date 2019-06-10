/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /actor/getActors889': 'ActorController.getActors889',
  'GET /actor/getActorById889': 'ActorController.getActorById889',
  'GET /actor/getActorByName889': 'ActorController.getActorByName889',
  'GET /actor/getActorByAge889': 'ActorController.getActorByAge889',
  
  'POST /actor/addMovieForActorById889': 'ActorController.addMovieForActorById889',
  'DELETE /actor/deleteActorById889': 'ActorController.deleteActorById889',

  'GET /movie/getMovies889': 'MovieController.getMovies889',
  'GET /movie/getMovieById889': 'MovieController.getMovieById889',
  'GET /movie/getMovieByTitle889': 'MovieController.getMovieByTitle889',
  'GET /movie/getMoviesByYear889': 'MovieController.getMoviesByYear889',
  'GET /movie/getMoviesByRuntime889': 'MovieController.getMoviesByRuntime889',
  'GET /movie/getMoviesByCountry889': 'MovieController.getMoviesByCountry889',
  'POST /movie/addActorForMovieById889': 'MovieController.addActorForMovieById889',
  'DELETE /movie/deleteMovieById889': 'MovieController.deleteMovieById889',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
