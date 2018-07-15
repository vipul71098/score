
  myapp.controller("mainctrl",function($scope,$http,$rootScope,dataShare){
    $(() => {
           'use strict';
           $('button').click(function() {
               $(this).toggleClass('pressed');
           });
       });
       $scope.chan=["makemytrip","tripadvisor","zomato","holidayiq","booking","expedia"];
      $scope.csv=[];
      $scope.data={};
      var results=[];
      $scope.channels=[];
      $scope.link=[];


      $scope.updatechannels = function(chan){
        var index = $scope.channels.indexOf(chan);

        if(index == -1){
          $scope.channels.push(chan);
        }
        else{
          $scope.channels.splice(index, 1);
        }
      }
dataShare.send_channels($scope.channels);

      $scope.getdata = function(){
        var hot=$scope.get_e;
        var loc = $scope.get_loc;

        if(!loc){
            loc ="";
        }

        for(i=0;i<$scope.channels.length;i++){
       $scope.data[$scope.channels[i]] = [];
       console.log("sdsdsdss",$scope.data)
       var get_data= function(callback){ $http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyBVdMX69Jc_Qvhts85xjOXVmE9w_JIxLGc&cx=008935209388523953567:1zh7j-szwa4&q="+hot+" "+loc+" "+$scope.channels[i]).then(function(response){
           console.log("loc",loc);
         results = response.data;
         console.log(results)
         dataShare.send_link($scope.data);
         callback();
           });
        };
            var show_data=function(){
            for(k=0;k<$scope.channels.length;k++){
            for(j=0;j<results.items.length;j++){
                var link=[];
           var link=results.items[j].link;
            var dash= hot.replace(/\s/g, "-");
            var reeb = new RegExp(dash,"ig");
             var score= hot.replace(/\s/g, "_");
            var un = new RegExp(score,"ig");
             var re1 = new RegExp(hot,"ig");
            var re = new RegExp(loc,"ig");

            if(results.items[j].displayLink == "www.makemytrip.com"  && ( re.test(link) || reeb.test(link) || re1.test(link) ||  un.test(link))){
              var mlink=[];
              var linkm=results.items[j].link;
              mlink.push(linkm);
            for(b=0;b<mlink.length;b++){
            var c=(mlink[b].split("/").length - 1);
            if(c == 4 &&(reeb.test(mlink) || un.test(mlink)) ){
                  var link1 =[];
                     link1.push(mlink[b]);
                     $.each(link1, function(i, el){
                      if($.inArray(el,   $scope.data.makemytrip) === -1)   $scope.data.makemytrip.push(el);});
                }
              }

            }//end of makemytrip
                if(results.items[j].displayLink == "www.expedia.com"  && ( re.test(link) || reeb.test(link) || re1.test(link) ||  un.test(link))){
                   var exlink=[];
                    var elink=results.items[j].link;
                    exlink.push(elink);
                    var ex ="Hotel-Information";
                    var re = new RegExp(ex,"ig");
                     for(b=0;b<exlink.length;b++){
                      var c=(exlink[b].split("/").length - 1);
                      if(c == 3 &&  re.test(exlink[b] )){
                        var link2 =[];
                         link2.push(exlink[b]);
                         $.each(link2, function(i, el){
                          if($.inArray(el,   $scope.data.expedia) === -1)   $scope.data.expedia.push(el);});
                      }
                    }
                }//end of expedia
                if(results.items[j].displayLink == "www.tripadvisor.com"  &&  ( re.test(link) || reeb.test(link) || re1.test(link) ||  un.test(link))){
                   var tlink=[];
                    var trlink=results.items[j].link;
                    tlink.push(trlink);
                    var tr ="restaurants";
                    var re = new RegExp(tr,"ig");
                    var ex ="Hotel_Review";
                    var re1 = new RegExp(ex,"ig");
                     for(b=0;b<tlink.length;b++){
                      var c=(tlink[b].split("/").length - 1);
                      if(c == 3  && re1.test(tlink[b])){
                        var link3 =[];
                         link3.push(tlink[b]);
                         $.each(link3, function(i, el){
                          if($.inArray(el,   $scope.data.tripadvisor) === -1)   $scope.data.tripadvisor.push(el);});
                      }
                    }
                }//end of tripadvisor
                if(results.items[j].displayLink == "www.zomato.com"  && ( re.test(link) || reeb.test(link) || re1.test(link) ||  un.test(link))){
                   var zlink=[];
                    var zolink=results.items[j].link;
                    console.log("test",results.items[j].pagemap.metatags)
                    zlink.push(zolink);
                    var ex ="restaurants";
                    var re = new RegExp(ex,"ig");
                     for(b=0;b<zlink.length;b++){
                      var c=(zlink[b].split("/").length - 1);
                      if(c == 4 &&  (!re.test(zlink[b]) )){
                        var link4 =[];
                         link4.push(zlink[b]);
                         $.each(link4, function(i, el){
                          if($.inArray(el,   $scope.data.zomato) === -1)   $scope.data.zomato.push(el);});
                      }
                    }
                }//end of zomato

                if(results.items[j].displayLink == "www.booking.com"  &&  ( re.test(link) || reeb.test(link) || re1.test(link) ||  un.test(link))){
                   var blink=[];
                    var bolink=results.items[j].link;
                    //console.log("bolink",bolink)
                    blink.push(bolink);

                     for(b=0;b<blink.length;b++){

                      var re1 = new RegExp(dash+".html","ig");

                      var c=(blink[b].split("/").length - 1);
                      if( c == 5 || re1.test(blink[b])  ){
                        var link5 =[];
                         link5.push(blink[b]);
                         $.each(link5, function(i, el){
                          if($.inArray(el, $scope.data.booking) === -1)   $scope.data.booking.push(el);});
                      }
                    }
                }//end of booking
                if(results.items[j].displayLink == "www.holidayiq.com"  && ( re1.test(link) || reeb.test(link) || re1.test(link) ||  un.test(link))){
                   var hlink=[];
                    var hrlink=results.items[j].link;
                    hlink.push(hrlink);
                    console.log("hlink",hlink)

                    var re = new RegExp(hot,"ig");
                     for(b=0;b<hlink.length;b++){
                      var c=(hlink[b].split("/").length - 1);
                      if(c == 3){
                        var link6 =[];
                         link6.push(hlink[b]);
                         $.each(link6, function(i, el){
                          if($.inArray(el,   $scope.data.holidayiq) === -1)   $scope.data.holidayiq.push(el);});
                      }
                    }
                }//end of holidayiq

          }
         }

      };
         get_data(show_data);
    }//end of for loop
        }
        $scope.insert = function(){
          var d = new Date();
        	var n = d.toLocaleTimeString();
          var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
    var date=  day + "/" + month + "/" + year;
    $scope.channels1 = $scope.channels.toString();
    $http.post('/', {'hotel':$scope.get_e,'location':$scope.get_loc,'chan':$scope.channels1,'time':n,'date':date}).then(
      function(resp) {
        console.log(resp);
      },
      function(errorResp) {
        console.log(errorResp);
      }
    )

         
        }//end of insert function
  });//end of controller
