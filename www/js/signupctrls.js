angular.module('app.signupctrls', [])
.controller('signupCtrl', function($scope,$state,$http,$ionicPopup) {


    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>SIGN UP SUCCESS</b>',
         scope: $scope,
         buttons: [
           { text: 'OK',
            type: 'button-assertive',
            },
         ]
       });
       myPopup.then(function(res) {
         console.log('Tapped!', res);
       });
      };

    $scope.signup       = [];

    console.log('signup pendonor');

    $scope.submitUser   = function(firstname,lastname,birthdate,goldar,jumdon,lastdonate,email,password){

        $scope.signup   = {
            "firstname"     : firstname,
            "lastname"      : lastname,
            "birthdate"     : birthdate,
            "goldar"        : goldar,
            "jumdon"        : jumdon,
            "firstjumdon"   : jumdon,
            "lastdonate"    : lastdonate,
            "email"         : email,
            "password"      : password,
            "typeuser"      : false
        };
        console.log($scope.signup);
        console.log('tes');
        $state.go('login');

        $scope.postUser = function() {
            $http({
                method: 'POST',
                url: 'http://128.199.188.36:3000/users',
                data: $scope.signup
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                // $scope.showPopup();
                alert("Sign Up Success");
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postUser();

    }

})
.controller('signup2Ctrl', function($scope,$state,$http,$stateParams,$ionicPopup) {

    $scope.firstname    = "";
    $scope.lastname     = "";
    $scope.cabang       = "";
    $scope.token        = "";
    $scope.email        = "";
    $scope.password     = "";

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>SIGN UP SUCCESS</b>',
         scope: $scope,
         buttons: [
           { text: 'OK',
            type: 'button-assertive',
            },
         ]
       });
       myPopup.then(function(res) {
         console.log('Tapped!', res);
       });
      };

    $scope.signup       = [];

    console.log('signup PMI');

    $scope.submitUser   = function(firstname,lastname,cabang,token,email,password){

        $scope.signup   = {
            "firstname"     : firstname,
            "lastname"      : lastname,
            "cabang"        : cabang,
            "token"         : token,
            "email"         : email,
            "password"      : password,
            "typeuser"      : true
        };
        console.log($scope.signup);
        console.log('tes');
        $state.go('login');

        $scope.postUser = function() {
            $http({
                method: 'POST',
                url: 'http://128.199.188.36:3000/users',
                data: $scope.signup
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                // $scope.showPopup();
                alert("Sign Up Success");
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postUser();

    }

})
