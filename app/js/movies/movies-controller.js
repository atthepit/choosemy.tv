/**
 * Created by pparedes on 26/10/2015.
 */

(function () {
    "use strict";

    angular
        .module('movies')
        .controller('MoviesCtrl', MoviesCtrl);

    MoviesCtrl.$inject = ['MoviesModel'];

    function MoviesCtrl(MoviesModel) {
        var moviesCtrl = this;
        moviesCtrl.getNextMovie = getNextMovie;

        activate();

        function setCurrentMovie(movie) {
            moviesCtrl.currentMovie = movie;
        }

        function activate() {
            MoviesModel.getCurrentMovie()
                .then(setCurrentMovie)
        }

        function getNextMovie() {
            MoviesModel.getNextMovie()
                .then(function (movie) {
                    moviesCtrl.currentMovie = movie;
                });
        }
    }
})();