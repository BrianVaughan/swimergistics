'use strict';

var myApp = angular.module('swimergisticsApp')

    myApp.controller('libCtrl', function ($scope) {

        $scope.convert = function(swim){
            console.log(swim);
            console.log(swim.Altitude);
            console.log(swim.to);
            console.log(swim.from);
            console.log(swim.minute);
            console.log(swim.seconds);
            console.log(swim.fraction);
            console.log(swim.event);
            var minseconds = swim.minute*60;
            var time = minseconds + swim.seconds+(swim.fraction/100);

            if(swim.from==='Long Course Meter'){
                if (swim.to==='Long Course Meter'){
                    swim.result="SAME ";
                } else if (swim.to==='Short Course Meter'){
                    if (swim.event.indexOf('Free')){
                        if (swim.event==='50 Free Style'){
                            var value = (((time -.8))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time -.8))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Free Style'){
                            var value = (((time-1.6))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.6))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Free Style'){
                            var value = (((time-3.2))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-3.2))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='400/500 Free Style'){
                            var value = (((time-6.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-6.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        if (swim.event==='800/1000 Free Style'){
                            var value = (((time-12.8))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-12.8))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='1500/1650 Free Style'){
                            var value = (((time-24))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-24))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }

                    }
                    else if (swim.event.indexOf('Backstroke')>=0){
                        if (swim.event==='50 Backstroke Style'){
                            var value = (((time-.6))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.6))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Backstroke Style'){
                            var value = (((time-1.2))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.2))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Backstroke Style'){
                            var value = (((time-2.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Breaststroke')>=0){
                        if (swim.event==='50 Breaststroke Style'){
                            var value = (((time-1.0))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.0))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Breaststroke Style'){
                            var value = (((time-2.0))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2.0))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Breaststroke Style'){
                            var value = (((time-4.0))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-4.0))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Butterfly')>=0){
                        if (swim.event==='50 Butterfly Style'){
                            var value = (((time -.7))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time -.7))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Butterfly Style'){
                            var value = (((time-1.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Butterfly Style'){
                            var value = (((time-2.8))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2.8))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Individual')>=0){
                        if (swim.event==='200 Individual Medley'){
                            var value = (((time-3.2))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-3.2))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='400 Individual Medley'){
                            var value = (((time-6.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-6.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }

                } else {//Short Course Yards
                    if (swim.event.indexOf('Free')){
                        if (swim.event==='50 Free Style'){
                            var value = (((time-.8)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.8)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Free Style'){
                            var value = (((time-.6)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.6)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Free Style'){
                            var value = (((time-3.2)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-3.2)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='400/500 Free Style'){
                            var value = (((time-6.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-6.4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        if (swim.event==='800/1000 Free Style'){
                            var value = (((time-12.8)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-12.8)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='1500/1650 Free Style'){
                            var value = (((time-24)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-24)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }

                    }
                    else if (swim.event.indexOf('Backstroke')>=0){
                        if (swim.event==='50 Backstroke Style'){
                            var value = (((time-.6)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.6)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Backstroke Style'){
                            var value = (((time-1.2)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.2)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Backstroke Style'){
                            var value = (((time-2.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2,4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Breaststroke')>=0){
                        if (swim.event==='50 Breaststroke Style'){
                            var value = (((time-1.0)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.0)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Breaststroke Style'){
                            var value = (((time-2.0)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2.0)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Breaststroke Style'){
                            var value = (((time-4.0)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-4.0)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Butterfly')>=0){
                        if (swim.event==='50 Butterfly Style'){
                            var value = (((time-.7)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.7)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Butterfly Style'){
                            var value = (((time-1.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Butterfly Style'){
                            var value = (((time-2.8)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2.8)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Individual')>=0){
                        if (swim.event==='200 Individual Medley'){
                            var value = (((time-3.2)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-3.2)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;

                        }
                        else if (swim.event==='400 Individual Medley'){
                            var value = (((time-6.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-6.4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                }

            }else if (swim.from==='Short Course Meter'){
                if (swim.to==='Long Course Meter'){
                    if (swim.event.indexOf('Free')){
                        if (swim.event==='50 Free Style'){
                            var value = (((time +.8))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time +.8))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Free Style'){
                            var value = (((time+1.6))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+1.6))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Free Style'){
                            var value = (((time+3.2))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+3.2))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='400/500 Free Style'){
                            var value = (((time+6.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+6.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        if (swim.event==='800/1000 Free Style'){
                            var value = (((time+12.8))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+12.8))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='1500/1650 Free Style'){
                            var value = (((time+24))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+24))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }

                    }
                    else if (swim.event.indexOf('Backstroke')>=0){
                        if (swim.event==='50 Backstroke Style'){
                            var value = (((time+.6))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+.6))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Backstroke Style'){
                            var value = (((time+1.2))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+1.2))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Backstroke Style'){
                            var value = (((time+2.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+2.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Breaststroke')>=0){
                        if (swim.event==='50 Breaststroke Style'){
                            var value = (((time+1.0))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+1.0))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Breaststroke Style'){
                            var value = (((time+2.0))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+2.0))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Breaststroke Style'){
                            var value = (((time+4.0))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+4.0))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Butterfly')>=0){
                        if (swim.event==='50 Butterfly Style'){
                            var value = (((time +.7))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time +.7))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Butterfly Style'){
                            var value = (((time+1.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+1.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Butterfly Style'){
                            var value = (((time+2.8))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time+2.8))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Individual')>=0){
                        if (swim.event==='200 Individual Medley'){
                            var value = (((time+3.2))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-3.2))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='400 Individual Medley'){
                            var value = (((time+6.4))/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-6.4))%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }

                } else if (swim.to==='Short Course Meter'){
                    swim.result="SAME";
                } else {
                    if (swim.event.indexOf('Free')){
                        if (swim.event==='50 Free Style'){
                            var value = (((time-.8)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.8)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Free Style'){
                            var value = (((time-.6)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.6)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Free Style'){
                            var value = (((time-3.2)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-3.2)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='400/500 Free Style'){
                            var value = (((time-6.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-6.4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        if (swim.event==='800/1000 Free Style'){
                            var value = (((time-12.8)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-12.8)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='1500/1650 Free Style'){
                            var value = (((time-24)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-24)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }

                    }
                    else if (swim.event.indexOf('Backstroke')>=0){
                        if (swim.event==='50 Backstroke Style'){
                            var value = (((time-.6)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.6)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Backstroke Style'){
                            var value = (((time-1.2)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.2)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Backstroke Style'){
                            var value = (((time-2.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2,4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Breaststroke')>=0){
                        if (swim.event==='50 Breaststroke Style'){
                            var value = (((time-1.0)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.0)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Breaststroke Style'){
                            var value = (((time-2.0)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2.0)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Breaststroke Style'){
                            var value = (((time-4.0)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-4.0)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Butterfly')>=0){
                        if (swim.event==='50 Butterfly Style'){
                            var value = (((time-.7)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-.7)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='100 Butterfly Style'){
                            var value = (((time-1.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-1.4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                        else if (swim.event==='200 Butterfly Style'){
                            var value = (((time-2.8)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-2.8)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }
                    else if (swim.event.indexOf('Individual')>=0){
                        if (swim.event==='200 Individual Medley'){
                            var value = (((time-3.2)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-3.2)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;

                        }
                        else if (swim.event==='400 Individual Medley'){
                            var value = (((time-6.4)/1.11)/60);
                            var val = Math.floor(1 * value) / 1;
                            var strValue = val.toFixed(0);
                            var decimal = ((((time-6.4)/1.11)%60))/100;
                            var decimalStr = (decimal*100).toFixed(2);
                            swim.result=val+'.'+decimalStr;
                        }
                    }

                }
            }else{//Short Course Yard

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
           // swim.result="hi mickey";
        }

    });



