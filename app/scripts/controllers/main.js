'use strict';

angular.module('swimergisticsApp')
    .controller('MainCtrl', function ($scope) {
    	$timeout(function () {
        $scope.mainswimimage='Swimming_pool_1';
        $scope.titleimage='SwimergisticTitle1'; 
        $scope.logo='logo4';

        $scope.setBackground = function (url) {
            $scope.urlbackimage = url;
        }
        $scope.setBackground("../images/{{mainswimimage}}.jpg");
        }, 1000);
    });
