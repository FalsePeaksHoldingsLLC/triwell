app.config(['$routeProvider','$locationProvider',
    function ($routeProvider, $locationProvider){
        $routeProvider
        .when("/", {
            templateUrl : "templates/contact.html"
        }).when("/about", {
            templateUrl : "templates/about.html"
        })
        .when("/blog", {
            templateUrl : "templates/blog.html"
        })
        .when("/contact", {
            templateUrl : "templates/contact.html"
        })
        .when("/DISCLAIMER", {
            templateUrl : "templates/disclaimer.html"
        }).when("/PRIVACYPOLICY", {
            templateUrl : "templates/privacy.html"
        }).when("/TERMSOFSERVICE", {
            templateUrl : "templates/terms.html"
        }).when("/SPECIALTHANKS", {
            templateUrl : "templates/thanks.html"
        });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }]
);