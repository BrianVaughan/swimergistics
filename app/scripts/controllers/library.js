'use strict';

angular.module('swimergisticsApp')
    .controller('libCtrl', function ($scope) {
        $scope.setBackground = function (url) {
            $scope.urlbackimage = url;
        }
        $scope.setBackground("../images/swimming_pool_1.jpg");
    });