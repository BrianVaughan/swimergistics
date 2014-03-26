'use strict';

var myApp = angular.module('swimergisticsApp')

    myApp.controller('libCtrl', function ($scope) {
        console.log("yes");
    /*    $scope.convert = function() {
            $scope.contacts.push($scope.newcontact);
            $scope.newcontact = "";
        }*/
     //   $scope=swim;
     //   $scope.swim.minute=0;
     //   $scope.swim.seconds=0;
     //   $scope.swim.fraction=0;
        $scope.convert = function(swim){
            console.log(swim);
            console.log(swim.Altitude);
            console.log(swim.to);
            console.log(swim.from);
            console.log(swim.minute);
            console.log(swim.seconds);
            console.log(swim.fraction);
            console.log(swim.event);

            if(swim.to==='Long Course Meter'){
                if (swim.from==='Long Course Meter'){
                    swim.result="No Conversion because same"
                } else if (swim.from==='Short Course Meter'){

                } else {
                    //Short Course Yard
                }

            }else if (swim.to==='Short Course Meter'){
                if (swim.from==='Long Course Meter'){

                } else if (swim.from==='Short Course Meter'){
                    swim.result="No Conversion because same"
                } else {
                   //Short Course Yard
                }
            }else {
                if (swim.from==='Long Course Meter'){

                } else if (swim.from==='Short Course Meter'){

                } else {
                    swim.result="No Conversion because same"
                }
            }


            if (swim.event === '200 Free Style'){
                console.log(swim.event + ' is true');
                if (swim.Altitude==='3000-4250 ft'){
                    console.log('3000-4250 ft');
                } else if (swim.Altitude==='4251-6500 ft'){
                    console.log('4251-6500 ft');
                } else if (swim.Altitude==='65000+'){
                    console.log('65000+');
                } else {
                    console.log('none');
                }

            }
            swim.result="hi mickey";
        }

    });

