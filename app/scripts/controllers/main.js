'use strict';

angular.module('swimergisticsApp')
    .controller('MainCtrl', function ($scope) {
        $scope.mainswimimage='Swimming_pool_1';
        $scope.titleimage='SwimergisticTitle1'; 
        $scope.logo='logo4';
        $scope.setBackground = function (url) {
            $scope.urlbackimage = url;
        }
        $scope.setBackground("../images/{{mainswimimage}}.jpg");
    });
