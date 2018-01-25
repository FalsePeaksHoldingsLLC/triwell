app.config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider){
        $routeProvider
        .when("/", {
            templateUrl : "templates/yellow.html"
        })
        .when("/red", {
            templateUrl : "templates/red.html"
        })
        .when("/green", {
            templateUrl : "templates/green.html"
        })
        .when("/blue", {
            templateUrl : "templates/blue.html"
        });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }]
);