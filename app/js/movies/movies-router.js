/**
 * Created by pparedes on 26/10/2015.
 */

(function () {
    "use strict";

    angular
        .module('movies')
        .config(MoviesRouter);

    MoviesRouter.$inject = ['$stateProvider'];

    function MoviesRouter($stateProvider) {
        $stateProvider
            .state('choosemytv.movies', {
                url: '/movies',
                views: {
                    'movies@': {
                        controller: 'MoviesCtrl as moviesCtrl',
                        templateUrl: 'js/movies/movies.tmpl.html'
                    }
                }
            });
    }
})();