/**
 * Created by Pedro on 26/10/2015.
 */

(function () {
    angular
        .module('movies')
        .filter('rating', RatingFilter);

    function RatingFilter() {
        return function (rating) {
            return rating ? (rating * 10).toFixed(1) + '%' : '0%';
        }
    }
})();