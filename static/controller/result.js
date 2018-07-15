          myapp.controller("result",function($scope,$rootScope,dataShare){
            $rootScope.$on("avg",function(){

           $scope.average = dataShare.get_avg();
           console.log("average",$scope.average);
  
           })
          });//end of controller
