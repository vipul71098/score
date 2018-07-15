var myapp =angular.module("app",[]);
myapp.controller("myctrl",function($scope,$http){

$scope.send = function(){
	var cars=["BMW","jaguar"];
	 $http.post('/receiver', {"url": cars}).
      success(function(results) {
        alert(results)
      })
	}

});