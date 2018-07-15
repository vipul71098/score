

  var myapp =angular.module("app",[ "ngRoute","checklist-model"]);
  myapp.config(function($routeProvider){
    $routeProvider
     .when('/', {
        templateUrl : '../static/channels.html',
        controller  : 'mainctrl'
      })
      .when('/downloadcsv', {
        templateUrl : '../static/downloadcsv.html',
        controller  : 'downloadctrl'
      })
       .when('/result', {
        templateUrl : '../static/result.html',
        controller  : 'result'
      })
  });
