
angular.module('pickemApp', ['ui.sortable']);

angular.module('pickemApp')
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true; //enable CORS
    })
    .run(function () {
        console.log("App running");
    });