app.config(function($routeProvider) {
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
});