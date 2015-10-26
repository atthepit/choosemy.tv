/**
 * Created by Pedro on 26/10/2015.
 */

(function () {
    angular
        .module('choosemytv.model.movies', [])
        .factory('MoviesModel', MoviesModel);

    MoviesModel.$inject = ['$http', '$q'];

    function MoviesModel($http, $q) {
        var moviesModel = {},
            URLS = {
                TRENDING: 'https://api-v2launch.trakt.tv/movies/trending?extended=full,images'
            },
            HEADERS = {
                'Content-Type': 'application/json',
                'trakt-api-version': 2,
                'trakt-api-key': '939da24adf12eeda4a0dc50e13eca49deba384bb24d765eb403b8586883e2b10'
            },
            currentMovie,
            currentIndex = 0,
            page = 1,
            limit = 5,
            movies = [];

        moviesModel.getCurrentMovie = getCurrentMovie;
        moviesModel.getNextMovie = getNextMovie;

        return moviesModel;

        ///////////////////////////

        function extract(result) {
            return result.data;
        }

        function cacheMovies(result) {
            movies = movies.concat(extract(result));
            page += 1;
            return movies;
        }

        function cacheCurrentMovie(movies) {
            currentMovie = movies[currentIndex].movie;
            return currentMovie;
        }

        function getPaginationInfo() {
            return '&page=' + page + '&limit=' + limit;
        }

        function getCurrentMovie() {
            var deferred = $q.defer();

            if (currentMovie) {
                deferred.resolve(currentMovie);
            } else {
                return $http.get(URLS.TRENDING + getPaginationInfo(),{headers: HEADERS})
                    .then(cacheMovies)
                    .then(cacheCurrentMovie);
            }

            return deferred.promise;
        }

        function getNextMovie() {
            var deferred = $q.defer();
            currentIndex += 1;

            if (currentIndex < movies.length) {
                deferred.resolve(cacheCurrentMovie(movies));
            } else {
                return $http.get(URLS.TRENDING  + getPaginationInfo(),{headers: HEADERS})
                    .then(cacheMovies)
                    .then(cacheCurrentMovie);
            }

            return deferred.promise;
        }
    }
})();