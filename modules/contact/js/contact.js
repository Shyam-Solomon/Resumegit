angular.module("contactapp", [])

.controller("ctctrl",function($scope,$http){

                $scope.myFunction= function(user){
                    console.log("Your file has been Submitted");
                   $http({
                    method: 'POST',
                    url  : 'http://localhost:3000/co',
                    data : user
                }).then(function(res)
                {
                  console.log(res.data);
                  console.log(user);
                  if(res.data=="insertion success"){
                    $scope.user={};
                    alert("Sucessfully Submitted")

                  }
                })
                }
        $scope.initMap =function(){
        var uluru = {lat: 12.910414, lng: 80.094539};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
       $scope.initMap();
           
});