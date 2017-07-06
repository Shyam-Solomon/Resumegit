var app = angular.module("resume", ["ngRoute","contactapp","hobapp","signinapp","contactdisplay"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/abt", {
        templateUrl :"/modules/abt/abt.html"
    })
    .when("/home",{
        templateUrl :"/modules/home/home.html"
    })
    .when("/pro", {
        templateUrl : "/modules/pro/pro.html"
    })
    .when("/qual", {
        templateUrl : "/modules/qual/qual.html"
    })
    .when("/mypic", {
        templateUrl : "/modules/media/mypic.html"
    })
    .when("/co", {
        templateUrl : "/modules/contact/co.html",
        controller: "ctctrl"
    })
    .when("/hob", {
        templateUrl : "/modules/hobbies/hob.html",
        controller: "hobctrl"
    })
    .when("/signin", {
        templateUrl : "/modules/signin/signin.html",
        controller: "signinctrl"
    })
    .when('/display', {
            templateUrl: '/modules/contactdisp/display.html',
            controller: "disctrl"      
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



