/**
 * Created by pparedes on 26/10/2015.
 */

(function () {
    angular
        .module('ChooseMyTv')
        .config(ChooseMyTvRouter);

    ChooseMyTvRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ChooseMyTvRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('choosemytv', {
                url: '',
                abstract: true
            });

        $urlRouterProvider.otherwise('/movies');
    }
})();