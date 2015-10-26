/**
 * Created by pparedes on 26/10/2015.
 */

(function () {
    angular
        .module('movies')
        .directive('backgroundImage', BackgroundImageDirective);

    function BackgroundImageDirective(){
        return function(scope, element, attrs){
            var url = attrs.backgroundImage;
            element.css({
                'background-image': 'url(' + url +')',
                'background-size' : 'cover'
            });
        };
    }
})();