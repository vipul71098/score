myapp.factory('dataShare',function($rootScope){
  var service = this;
  service.send_channels = function(chain){
    console.log("chain",chain)
  this.channels = chain;
  $rootScope.$broadcast("csv");
  };
  service.send_link=function(link){
     this.links=link;
     $rootScope.$broadcast("csv");
};
service.send_avg=function(avg){
  console.log("send_avg",avg)
  this.average=avg;
  $rootScope.$broadcast("avg");

  
},
  service.get_channels = function(){
    return this.channels;
};
  service.get_link = function(){
    return this.links;
 };
 service.get_avg = function(){
  return this.average;
  console.log("get_avg",this.average)
 };
    return service;
    });
