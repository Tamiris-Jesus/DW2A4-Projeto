/*
    Utilização do SPA (Single Page Application)
*/ 

let app = angular.module("App", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "template/home.html"
        })
        .when("/estrategia", {
            templateUrl: "template/estrategia.html"
        })
        .when("/tecnologia", {
            templateUrl: "template/tecnologia.html"
        })
        .when("/diversos", {
            templateUrl: "template/diversos.html"
        })

        .otherwise({redirectTo: "/"})
})
