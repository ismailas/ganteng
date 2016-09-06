angular.module('app.mainctrls', [])

.controller('loginCtrl', function($scope,$http,$state,localStorageService) {
    console.log('userid',localStorageService.get('users_id'));
    $scope.email        = "";
    $scope.password     = "";
    $scope.login        = [];


    $scope.getdata = function(email,password){
        $scope.user ={
            'email'     : email,
            'password'  : password
        };
        console.log($scope.user);
    }

    $scope.submitLogin  = function(){
        var data    = {
            "email"     : $scope.user.email,
            "password"  : $scope.user.password
        };
        console.log(data);

        $http.post('http://128.199.188.36:3000/users/login', data).success(function(response) {
            if (response !== '') {
                console.log(localStorageService.get('users_id'));
                localStorageService.set('users_id', response.users_id);
                console.log(localStorageService.get('users_id'));
                $state.go('menu');
            } else {
                alert('password and username didn\'t mactch!!!')
            }
        }).error(function(response){alert('something\'s wrong!! Halp')});
    }

})
.controller('menuCtrl', function($scope, $state,$stateParams,$http, $rootScope,localStorageService,$ionicPopup,$window) {
    // username
    $scope.tabcheck = 0 ;



    $scope.users_id = localStorageService.get('users_id');
    console.log('logged in');
    console.log(localStorageService.get('users_id'));


    $scope.getuser = function() {
        // $scope.urlcall();
        var url_user    = "http://128.199.188.36:3000/users/" + localStorageService.get('users_id');

        $http({
            method: 'GET',
            url: url_user
        }).then(function successCallback(response) {
            console.log(response);
            $scope.user = response.data;
            $scope.reminder(response.data.typeuser, response.data.daycount);
            console.log(response.data.daycount);
            if (response.data.typeuser == false){
                $scope.foto =  "img/fotoprofil.jpg";
            } else {
                $scope.foto =  "img/chelsea.jpg";
            }
        }, function errorCallback(response) {

            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
    $scope.getuser();



    $scope.changeState  = function(user_id) {
        if ($scope.user_id == ''){
            $state.go('login');
        } else {
            $state.go('menu.event');
        }

    }
    $scope.changeState();

    $scope.editprof = function (){
        $state.go('profile', {'users_id' : $scope.user.users_id});
    }

    $scope.changeTab = function(newTab){
        $scope.tabcheck = newTab;
    };
    $scope.isTabactive = function(tabcheck){
        return $scope.tabcheck === tabcheck;
    };

    // status donor

    $scope.reminder = function(type,day){
        if ( type == false ){
            $scope.countdown = new Date($scope.user.lastdonate).addDays(day);
            // $scope.remaining = $scope.countdown.addDays(day);
            $scope.remaining = $scope.countdown.daysFromNow();
            $scope.remaining2 = $scope.countdown;
            $scope.statuscheck = $scope.remaining2.isBefore('today');
            console.log('statuscheck',$scope.statuscheck);
        }
    }

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: 'YOU ARE READY TO DONATE',
         subTitle: 'Check Today\'s Event!',
         cssClass: '.popup',
         scope: $scope,
         buttons: [
           { text: 'Not Now',
            type: 'button-light',
            },
           {
             text: '<b>Self-Check</b>',
             type: 'button-assertive',
             onTap: function(e) {
                 $state.go('selfcheck');
             }
           },
         ]
       });
       myPopup.then(function(res) {
         console.log('Tapped!', res);
       });
      };
      $scope.logout = function() {
         $scope.data = {}

         // An elaborate, custom popup
         var myPopup = $ionicPopup.show({
           title: 'Like, Seriously?',
           cssClass: '.popup',
           scope: $scope,
           buttons: [
             { text: 'No',
              type: 'button-light',
              },
             {
               text: '<b>Yes</b>',
               type: 'button-assertive',
               onTap: function(e) {
                   localStorageService.remove('users_id');
                   $state.go('login');
                   $window.location.reload();
               }
             },
           ]
         });
         myPopup.then(function(res) {
           console.log('Tapped!', res);
         });
        };



})
.controller('profileCtrl', function($scope,$state,$stateParams,$http,localStorageService,$ionicPopup,$window) {

    $scope.users_id = localStorageService.get('users_id');

    $scope.editPassword = false;




    console.log('profile');
    console.log($scope.users_id);
    $scope.urlx = "http://128.199.188.36:3000/users/" + $scope.users_id.toString();
    console.log($scope.urlx);
    $scope.getuser = function() {
        $http({
            method: 'GET',
            url: $scope.urlx
        }).then(function successCallback(response) {
            console.log(response);
            $scope.user = response.data;
            console.log($scope.user);
            $scope.user.birthdate = new Date(response.data.birthdate);
            if (response.data.typeuser == false){
                $scope.foto =  "img/fotoprofil.jpg";
            } else {
                $scope.foto =  "img/chelsea.jpg";
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getuser();



    $scope.submitUser   = function(){

        $scope.newprofile   = {
            "firstname"     : $scope.user.firstname,
            "lastname"      : $scope.user.lastname,
            "birthdate"     : $scope.user.birthdate,
            "goldar"        : $scope.user.goldar,
            "cabang"        : $scope.user.cabang,
            "email"         : $scope.user.email,
            "password"      : $scope.user.password,
        };
        console.log($scope.newprofile);
        console.log('tes');

        $scope.putUser = function() {
            $http({
                method: 'PUT',
                url: 'http://128.199.188.36:3000/users/'+$scope.users_id,
                data: $scope.newprofile
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY EDITED');
                $scope.showPopup();

                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('EDITING FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.putUser();

    }

    $scope.changeState  = function(user_id) {
        if ($scope.users_id == ''){
            $state.go('login');
        }
    }
    $scope.changeState();

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>EDITING PROFILE SUCCESS</b>',
         scope: $scope,
         buttons: [
           { text: 'OK',
            type: 'button-assertive',
            onTap: function(e) {
                $window.location.reload();
            }
            },
         ]
       });
       myPopup.then(function(res) {
         console.log('Tapped!', res);
       });
      };


})
