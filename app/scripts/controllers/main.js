'use strict';

angular.module('swimergisticsApp')
    .controller('MainCtrl', function ($scope) {

        $scope.setBackground = function (url) {
            $scope.urlbackimage = url;
        }
        $scope.setBackground("../images/Swimming_pool_1.jpg");
    });
