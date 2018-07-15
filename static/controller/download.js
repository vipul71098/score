myapp.controller("downloadctrl",function($scope,$http,$rootScope,dataShare){
           $scope.csv=[];
           $scope.h=[];
           $scope.score={};
           $scope.chan=[];
           $rootScope.$on("csv",function(){
           $scope.channels = dataShare.get_channels();
           $scope.data1=dataShare.get_link();
           for(j=0;j<$scope.channels.length;j++){
           $scope.score[$scope.channels[j]] =[];
           }
           
          $scope.getRoles = function() {
          return $scope.score;
          };
          $scope.check = function(value,checked) {
          for(k=0;k<$scope.channels.length;k++){
          var idx = $scope.score[$scope.channels[k]].indexOf(value);
          if (!checked) {
          $scope.score[$scope.channels[k]].splice(idx, 1);
          }
          }

          if(checked){
          for(f=0;f<$scope.channels.length;f++){
          console.log(value)
          var re = new RegExp($scope.channels[f],"ig");
          if (re.test(value)){
          $scope.score[$scope.channels[f]].push(value) 
        }
        }
        }
        };
        });
       
        $scope.downloadCSV = function(args){
        $http.post('/receiver', $scope.score).success(function (data) {
          
          dataShare.send_avg(data);
        
        })

         }

  })//end of controller
