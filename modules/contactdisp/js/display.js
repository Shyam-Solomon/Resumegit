angular.module("contactdisplay", [])
.controller('disctrl', function($scope, $http) {
	$scope.getd=function(){
  $http.get("http://localhost:3000/display")
  .then(function(response) {
        $scope.contact=response.data;
     console.log(response.data);
       });
  	}
  	$scope.getd();
 //Delete function 	
$scope.delrow=function(cid){
  		console.log(cid);
  		$http({
        method: 'DELETE',
        url:'http://localhost:3000/delete/'+cid   // value will send to server through url
         
    }).then (function(res){
        console.log(res.data);
        //alert("row deleted");
        $scope.getd();
    })

  	}

});