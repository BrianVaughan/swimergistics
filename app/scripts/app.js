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
                templateUrl: "views/main.html"
            })
            .state('library', {
                url: "/library",
                templateUrl: "views/library.html"
            })
    });
