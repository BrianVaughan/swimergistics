"use strict";angular.module("swimergisticsApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("main",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("library",{url:"/library",templateUrl:"views/library.html",controller:"libCtrl"}).state("engage",{url:"/engage",templateUrl:"views/engage.html"}).state("plan",{url:"/plan",templateUrl:"views/plan.html"}).state("create",{url:"/create",templateUrl:"views/create.html"})}]),angular.module("swimergisticsApp").controller("MainCtrl",["$scope",function(a){a.setBackground=function(b){a.urlbackimage=b},a.setBackground("../images/539b3f8f.swimming_pool_1.jpg")}]);var myApp=angular.module("swimergisticsApp");myApp.controller("libCtrl",["$scope",function(a){a.convert=function(a){console.log(a),console.log(a.Altitude),console.log(a.to),console.log(a.from),console.log(a.minute),console.log(a.seconds),console.log(a.fraction),console.log(a.event);var b=60*a.minute,c=b+a.seconds+a.fraction/100;if("Long Course Meter"===a.from){if("Long Course Meter"===a.to)a.result="SAME ";else if("Short Course Meter"===a.to){if(a.event.indexOf("Free")){if("50 Free Style"===a.event){var d=(c-.8)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.8)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Free Style"===a.event){var d=(c-1.6)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1.6)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Free Style"===a.event){var d=(c-3.2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-3.2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400/500 Free Style"===a.event){var d=(c-6.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-6.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}if("800/1000 Free Style"===a.event){var d=(c-12.8)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-12.8)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("1500/1650 Free Style"===a.event){var d=(c-24)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-24)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Backstroke")>=0){if("50 Backstroke Style"===a.event){var d=(c-.6)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.6)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Backstroke Style"===a.event){var d=(c-1.2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1.2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Backstroke Style"===a.event){var d=(c-2.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-2.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Breaststroke")>=0){if("50 Breaststroke Style"===a.event){var d=(c-1)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Breaststroke Style"===a.event){var d=(c-2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Breaststroke Style"===a.event){var d=(c-4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Butterfly")>=0){if("50 Butterfly Style"===a.event){var d=(c-.7)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.7)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Butterfly Style"===a.event){var d=(c-1.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Butterfly Style"===a.event){var d=(c-2.8)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-2.8)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Individual")>=0)if("200 Individual Medley"===a.event){var d=(c-3.2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-3.2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400 Individual Medley"===a.event){var d=(c-6.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-6.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Free")){if("50 Free Style"===a.event){var d=(c-.8)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.8)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Free Style"===a.event){var d=(c-.6)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.6)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Free Style"===a.event){var d=(c-3.2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-3.2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400/500 Free Style"===a.event){var d=(c-6.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-6.4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}if("800/1000 Free Style"===a.event){var d=(c-12.8)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-12.8)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("1500/1650 Free Style"===a.event){var d=(c-24)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-24)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Backstroke")>=0){if("50 Backstroke Style"===a.event){var d=(c-.6)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.6)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Backstroke Style"===a.event){var d=(c-1.2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1.2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Backstroke Style"===a.event){var d=(c-2.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),4/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Breaststroke")>=0){if("50 Breaststroke Style"===a.event){var d=(c-1)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Breaststroke Style"===a.event){var d=(c-2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Breaststroke Style"===a.event){var d=(c-4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Butterfly")>=0){if("50 Butterfly Style"===a.event){var d=(c-.7)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.7)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Butterfly Style"===a.event){var d=(c-1.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1.4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Butterfly Style"===a.event){var d=(c-2.8)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-2.8)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Individual")>=0)if("200 Individual Medley"===a.event){var d=(c-3.2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-3.2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400 Individual Medley"===a.event){var d=(c-6.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-6.4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if("Short Course Meter"===a.from)if("Long Course Meter"===a.to){if(a.event.indexOf("Free")){if("50 Free Style"===a.event){var d=(c+.8)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+.8)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Free Style"===a.event){var d=(c+1.6)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+1.6)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Free Style"===a.event){var d=(c+3.2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+3.2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400/500 Free Style"===a.event){var d=(c+6.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+6.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}if("800/1000 Free Style"===a.event){var d=(c+12.8)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+12.8)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("1500/1650 Free Style"===a.event){var d=(c+24)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+24)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Backstroke")>=0){if("50 Backstroke Style"===a.event){var d=(c+.6)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+.6)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Backstroke Style"===a.event){var d=(c+1.2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+1.2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Backstroke Style"===a.event){var d=(c+2.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+2.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Breaststroke")>=0){if("50 Breaststroke Style"===a.event){var d=(c+1)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+1)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Breaststroke Style"===a.event){var d=(c+2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Breaststroke Style"===a.event){var d=(c+4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Butterfly")>=0){if("50 Butterfly Style"===a.event){var d=(c+.7)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+.7)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Butterfly Style"===a.event){var d=(c+1.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+1.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Butterfly Style"===a.event){var d=(c+2.8)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c+2.8)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Individual")>=0)if("200 Individual Medley"===a.event){var d=(c+3.2)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-3.2)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400 Individual Medley"===a.event){var d=(c+6.4)/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-6.4)%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if("Short Course Meter"===a.to)a.result="SAME";else if(a.event.indexOf("Free")){if("50 Free Style"===a.event){var d=(c-.8)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.8)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Free Style"===a.event){var d=(c-.6)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.6)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Free Style"===a.event){var d=(c-3.2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-3.2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400/500 Free Style"===a.event){var d=(c-6.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-6.4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}if("800/1000 Free Style"===a.event){var d=(c-12.8)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-12.8)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("1500/1650 Free Style"===a.event){var d=(c-24)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-24)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Backstroke")>=0){if("50 Backstroke Style"===a.event){var d=(c-.6)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.6)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Backstroke Style"===a.event){var d=(c-1.2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1.2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Backstroke Style"===a.event){var d=(c-2.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),4/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Breaststroke")>=0){if("50 Breaststroke Style"===a.event){var d=(c-1)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Breaststroke Style"===a.event){var d=(c-2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Breaststroke Style"===a.event){var d=(c-4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Butterfly")>=0){if("50 Butterfly Style"===a.event){var d=(c-.7)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-.7)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("100 Butterfly Style"===a.event){var d=(c-1.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-1.4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("200 Butterfly Style"===a.event){var d=(c-2.8)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-2.8)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}}else if(a.event.indexOf("Individual")>=0)if("200 Individual Medley"===a.event){var d=(c-3.2)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-3.2)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}else if("400 Individual Medley"===a.event){var d=(c-6.4)/1.11/60,e=Math.floor(1*d)/1,f=(e.toFixed(0),(c-6.4)/1.11%60/100),g=(100*f).toFixed(2);a.result=e+"."+g}"200 Free Style"===a.event&&(console.log(a.event+" is true"),"3000-4250 ft"===a.Altitude?console.log("3000-4250 ft"):"4251-6500 ft"===a.Altitude?console.log("4251-6500 ft"):"65000+"===a.Altitude?console.log("65000+"):console.log("none"))}}]);
