'use strict';

angular.module('swimergisticsApp',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "views/main.html",
                controller:"MainCtrl"

            })
            .state('library', {
                url: "/library",
                templateUrl: "views/library.html",
                controller:"libCtrl"
            })
            .state('engage', {
                url: "/engage",
                templateUrl: "views/engage.html"
            })
            .state('plan', {
                url: "/plan",
                templateUrl: "views/plan.html"
            })
            .state('create', {
                url: "/create",
                templateUrl: "views/create.html"
            })
    });
