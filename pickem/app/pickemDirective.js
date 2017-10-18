angular.module('pickemApp')
    .directive('pickem', function () {
        return {
            restrict: 'E',
            templateUrl: 'pickem/app/pickem.html'
        }
    });