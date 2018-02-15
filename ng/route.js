app.config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider){
        $routeProvider
        .when("/", {
            templateUrl : "templates/about.html"
        })
        .when("/blog", {
            templateUrl : "templates/blog.html"
        })
        .when("/contact", {
            templateUrl : "templates/contact.html"
        });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }]
);