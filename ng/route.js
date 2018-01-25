app.config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider){
        $routeProvider
        .when("/", {
            templateUrl : "templates/blue.html"
        })
        .when("/red", {
            templateUrl : "templates/red.html"
        })
        .when("/green", {
            templateUrl : "templates/green.html"
        })
        .when("/contact", {
            templateUrl : "templates/contact.html"
        });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }]
);