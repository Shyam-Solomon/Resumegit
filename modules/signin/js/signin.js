  angular.module("signinapp", [])
  .controller('signinctrl', function($scope,$http,$location) {
    $scope.verifydata=function(signindata){
    console.log(signindata);
    $http({
                method: 'POST',
                url: 'http://localhost:3000/signinpage',
                data: signindata
            }).then(function(res) {
                console.log(res);
                $scope.result=res.data;
                console.log($scope.result);
                    
                 if($scope.result=="success")
                   { $location.path("/display");

                   }
                else{
                window.alert("Invalid Username");
                    }
               })   
       
}
        });




