angular.module('app.inputctrls', [])

.controller('inputBCCtrl', function($scope,$state,$http,$stateParams,localStorageService,$ionicPopup) {

    $scope.users_id = localStorageService.get('users_id');
    $scope.bloodcall       = [];

    console.log('Input BloodCall');

    $scope.submitBC   = function(bcgoldar,bcatasnama,bcdate,bcpriority,bcketerangan,$window){

        $scope.bloodcall   = {
            "bcgoldar"      : bcgoldar,
            "bcatasnama"    : bcatasnama,
            "bcdate"        : bcdate,
            "bcpriority"    : bcpriority,
            "bcketerangan"  : bcketerangan,
            "bcstatus"      : false,
            "users_id"      : $scope.users_id
        };
        console.log($scope.bloodcall);
        console.log('tes');

        $scope.postBC = function() {
            $http({
                method: 'POST',
                url: 'http://128.199.188.36:3000/bloodcall',
                data: $scope.bloodcall
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                $scope.showPopup();
                $state.go('menu');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postBC();

        $scope.showPopup = function() {
           $scope.data = {}

           // An elaborate, custom popup
           var myPopup = $ionicPopup.show({
             title: '<b>INPUT BLOODCALL SUCCESS</b>',
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

    }

})
.controller('inputNFCtrl', function($scope,$state,$http,$stateParams,localStorageService,$ionicPopup,$window) {

    $scope.users_id = localStorageService.get('users_id');


    $scope.newsfeed       = [];

    console.log('Input News');

    $scope.submitNF   = function(nfjudul,nfimage,nfcontent){

        $scope.newsfeed   = {
            "nfjudul"     : nfjudul,
            "nfimage"     : nfimage,
            "nfdate"      : new Date(),
            "nfcontent"   : nfcontent,
            "users_id"    : $scope.users_id
        };
        console.log($scope.newsfeed);
        console.log('tes');

        $scope.postNF = function() {
            $http({
                method: 'POST',
                url: 'http://128.199.188.36:3000/newsfeed',
                data: $scope.newsfeed
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY INPUT');
                $scope.showPopup();
                $state.go('menu');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('INPUT FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postNF();

    }

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>INPUT NEWS SUCCESS</b>',
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
.controller('inputEVCtrl', function($scope,$state,$http,$stateParams,localStorageService,NgMap,$ionicPopup,$window) {

    var marker;
    var vm = this;
    $scope.users_id = localStorageService.get('users_id');


    $scope.events       = [];

    $scope.getpos = function(){
        NgMap.getMap().then(function(map) {
            vm.map = map;
            marker = map.markers[0];
            $scope.userlat = marker.getPosition().lat();
            $scope.userlng = marker.getPosition().lng();
        });
    }

    console.log('Input Event');

    $scope.submitEV   = function(evname,evorganizer,evaddress,evdate){
        $scope.events       = {
            "evname"        : evname,
            "evorganizer"   : evorganizer,
            "evaddress"     : evaddress,
            "evdate"        : evdate,
            "evlat"         : $scope.userlat,
            "evlng"         : $scope.userlng,
            "users_id"      : $scope.users_id
        };
        console.log($scope.events);
        console.log('tes');


        $scope.postEV = function() {
            $http({
                method: 'POST',
                url: 'http://128.199.188.36:3000/event',
                data: $scope.events
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                $scope.showPopup();
                $state.go('menu');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postEV();

    }

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>INPUT EVENT SUCCESS</b>',
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
