var app = angular.module("resume", ["ngRoute","contactapp","signinapp"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/abt", {
        templateUrl :"modules/abt/abt.html"
    })
    .when("/home",{
        templateUrl :"modules/home/home.html"
    })
    .when("/pro", {
        templateUrl : "modules/pro/pro.html"
    })
    .when("/qual", {
        templateUrl : "modules/qual/qual.html"
    })
    .when("/co", {
        templateUrl : "modules/contact/co.html",
        controller: "ctctrl"
    })
    .when("/signin", {
        templateUrl : "modules/signin/signin.html",
        controller: "signinctrl"
    })
    .otherwise({
        "redirectTo":'/home'
    })  
    $locationProvider.html5Mode(true);
});
app.controller('navCtrl', function($scope, $http) {

            $http.get('nav.json').success (function(data){
            $scope.navbar = data;
        
        });  
});



