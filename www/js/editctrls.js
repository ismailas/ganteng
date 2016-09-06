angular.module('app.editctrls', [])

.controller('editBCCtrl', function($scope,$state,$stateParams,$http,localStorageService,$ionicPopup,$window) {

    $scope.users_id = localStorageService.get('users_id');
    $scope.backBC = function (){
        $state.go('BloodCall', {'bloodcall_id' : $stateParams.bloodcall_id});
    }

    $scope.bloodcall = {};
    console.log('editBC');
    console.log('bloodcall id',$stateParams.bloodcall_id);
    $scope.urlx = "http://128.199.188.36:3000/bloodcall/" + $stateParams.bloodcall_id.toString();
    console.log($scope.urlx);
    $scope.getBC = function() {
        $http({
            method: 'GET',
            url: $scope.urlx
        }).then(function successCallback(response) {
            console.log(response);
            $scope.bloodcall = response.data;
            $scope.bloodcall.bcdate = new Date(response.data.bcdate);
            console.log('bcdate',$scope.bloodcall.bcdate);
            console.log($scope.bloodcall);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getBC();



    $scope.submitBC   = function(){

        $scope.newBC   = {
            "bcgoldar"      : $scope.bloodcall.bcgoldar,
            "bcatasnama"    : $scope.bloodcall.bcatasnama,
            "bcdate"        : $scope.bloodcall.bcdate,
            "bcpriority"    : $scope.bloodcall.bcpriority,
            "bcketerangan"  : $scope.bloodcall.bcketerangan,
            "bcstatus"      : $scope.bloodcall.bcstatus,
        };
        console.log($scope.newBC);
        console.log('tes');

        $scope.putBC = function() {
            $http({
                method: 'PUT',
                url: 'http://128.199.188.36:3000/bloodcall/'+$stateParams.bloodcall_id,
                data: $scope.newBC
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY EDITED');
                $scope.showPopup();

            }, function errorCallback(response) {
                console.log('EDITING FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.putBC();

    }

    $scope.deleteBC = function(){
        $http({
            method: 'DELETE',
            url: 'http://128.199.188.36:3000/bloodcall/'+$stateParams.bloodcall_id,
        }).then(function successCallback(response) {
            console.log(response);
            console.log('SUCCESFULLY DELETED');
            $scope.showPopup2();
            $state.go('menu');

        }, function errorCallback(response) {
            console.log('DELETING FAILED');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.changeState  = function() {
        if ($stateParams.bloodcall_id == ''){
            $state.go('menu');
        }
    }
    $scope.changeState();

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>EDITING BLOODCALL SUCCESS</b>',
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
    $scope.showPopup2 = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>DELETING BLOODCALL SUCCESS</b>',
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
      $scope.showPopup3 = function() {
         $scope.data = {}

         // An elaborate, custom popup
         var myPopup = $ionicPopup.show({
           title: 'DELETING BLOODCALL',
           subTitle: 'Are you sure?',
           cssClass: '.popup',
           scope: $scope,
           buttons: [
             { text: 'NO',
              type: 'button-light',
              },
             {
               text: '<b>YES</b>',
               type: 'button-assertive',
               onTap: function(e) {
                   $scope.deleteBC();
                   $scope.showPopup2();
                   $state.go('menu');

               }
             },
           ]
         });
         myPopup.then(function(res) {
           console.log('Tapped!', res);
         });
        };


})
.controller('editNFCtrl', function($scope,$state,$stateParams,$http,localStorageService,$ionicPopup,$window) {

    $scope.users_id = localStorageService.get('users_id');
    $scope.backNF = function (){
        $state.go('NewsFeed', {'newsfeed_id' : $stateParams.newsfeed_id});
    }

    $scope.newsfeed = {};
    console.log('editNF');
    console.log('newsfeed id',$stateParams.newsfeed_id);
    $scope.urlx = "http://128.199.188.36:3000/newsfeed/" + $stateParams.newsfeed_id.toString();
    console.log($scope.urlx);
    $scope.getNF = function() {
        $http({
            method: 'GET',
            url: $scope.urlx
        }).then(function successCallback(response) {
            console.log(response);
            $scope.newsfeed = response.data;
            $scope.newsfeed.nfdate = new Date(response.data.updated_at);
            console.log('nfdate',$scope.newsfeed.nfdate);
            console.log($scope.newsfeed);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getNF();



    $scope.submitNF   = function(){

        $scope.newNF   = {
            "nfjudul"       : $scope.newsfeed.nfjudul,
            "nfimage"       : $scope.newsfeed.nfimage,
            "nfdate"        : $scope.newsfeed.nfdate,
            "nfcontent"     : $scope.newsfeed.nfcontent,
        };
        console.log($scope.newNF);
        console.log('tes');

        $scope.putNF = function() {
            $http({
                method: 'PUT',
                url: 'http://128.199.188.36:3000/newsfeed/'+$stateParams.newsfeed_id,
                data: $scope.newNF
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY EDITED');
                $scope.showPopup();

            }, function errorCallback(response) {
                console.log('EDITING FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.putNF();

    }

    $scope.deleteNF = function(){
        $http({
            method: 'DELETE',
            url: 'http://128.199.188.36:3000/newsfeed/'+$stateParams.newsfeed_id,
        }).then(function successCallback(response) {
            console.log(response);
            console.log('SUCCESFULLY DELETED');
            $scope.showPopup2();
            $state.go('menu');

        }, function errorCallback(response) {
            console.log('DELETING FAILED');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.changeState  = function() {
        if ($stateParams.newsfeed_id == ''){
            $state.go('menu');
        }
    }
    $scope.changeState();

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>EDITING NEWS SUCCESS</b>',
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
    $scope.showPopup2 = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>DELETING NEWS SUCCESS</b>',
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
      $scope.showPopup3 = function() {
         $scope.data = {}

         // An elaborate, custom popup
         var myPopup = $ionicPopup.show({
           title: 'DELETING NEWS',
           subTitle: 'Are you sure?',
           cssClass: '.popup',
           scope: $scope,
           buttons: [
             { text: 'NO',
              type: 'button-light',
              },
             {
               text: '<b>YES</b>',
               type: 'button-assertive',
               onTap: function(e) {
                   $scope.deleteNF();
                   $scope.showPopup2();
                   $state.go('menu');

               }
             },
           ]
         });
         myPopup.then(function(res) {
           console.log('Tapped!', res);
         });
        };


})
.controller('editEVCtrl', function($scope,$state,$stateParams,$http,localStorageService,$ionicPopup,NgMap,$window) {

    $scope.users_id = localStorageService.get('users_id');
    $scope.backEV = function (){
        $state.go('Event', {'event_id' : $stateParams.event_id});
    }

    $scope.events = {};
    console.log('editEV');
    console.log('event id',$stateParams.event_id);
    $scope.urlx = "http://128.199.188.36:3000/event/" + $stateParams.event_id.toString();
    console.log($scope.urlx);
    $scope.getEV = function() {
        $http({
            method: 'GET',
            url: $scope.urlx
        }).then(function successCallback(response) {
            console.log(response);
            $scope.events = response.data;
            $scope.events.evdate = new Date(response.data.evdate);
            console.log('evdate',$scope.events.evdate);
            console.log($scope.events);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getEV();

    $scope.getpos = function(){
        NgMap.getMap().then(function(map) {
            vm.map = map;
            marker = map.markers[0];
            $scope.userlat = marker.getPosition().lat();
            $scope.userlng = marker.getPosition().lng();
        });
    }

    $scope.submitEV   = function(){

        $scope.newEV   = {
            "evname"        : $scope.events.evname,
            "evorganizer"   : $scope.events.evorganizer,
            "evaddress"     : $scope.events.evaddress,
            "evdate"        : $scope.events.evdate,
            "evlat"         : $scope.userlat,
            "evlng"         : $scope.userlng,
        };
        console.log($scope.newEV);
        console.log('tes');

        $scope.putEV = function() {
            $http({
                method: 'PUT',
                url: 'http://128.199.188.36:3000/event/'+$stateParams.event_id,
                data: $scope.newEV
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY EDITED');
                $scope.showPopup();

            }, function errorCallback(response) {
                console.log('EDITING FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.putEV();

    }

    $scope.deleteEV = function(){
        $http({
            method: 'DELETE',
            url: 'http://128.199.188.36:3000/event/'+$stateParams.event_id,
        }).then(function successCallback(response) {
            console.log(response);
            console.log('SUCCESFULLY DELETED');
            $scope.showPopup2();
            $state.go('menu');

        }, function errorCallback(response) {
            console.log('DELETING FAILED');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.changeState  = function() {
        if ($stateParams.event_id == ''){
            $state.go('menu');
        }
    }
    $scope.changeState();

    $scope.showPopup = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>EDITING EVENT SUCCESS</b>',
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
    $scope.showPopup2 = function() {
       $scope.data = {}

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
         title: '<b>DELETING EVENT SUCCESS</b>',
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
      $scope.showPopup3 = function() {
         $scope.data = {}

         // An elaborate, custom popup
         var myPopup = $ionicPopup.show({
           title: 'DELETING EVENT',
           subTitle: 'Are you sure?',
           cssClass: '.popup',
           scope: $scope,
           buttons: [
             { text: 'NO',
              type: 'button-light',
              },
             {
               text: '<b>YES</b>',
               type: 'button-assertive',
               onTap: function(e) {
                   $scope.deleteEV();
                   $scope.showPopup2();
                   $state.go('menu');
               }
             },
           ]
         });
         myPopup.then(function(res) {
           console.log('Tapped!', res);
         });
        };


})
