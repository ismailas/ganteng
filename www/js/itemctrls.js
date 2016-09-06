angular.module('app.itemctrls', [])

.controller('BloodCallCtrl', function($scope,$http,$stateParams,$state,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    $scope.checkuser = function (user) {
        if (getItem('users_id') == user) {
            $scope.pemilik = true;
        } else {
            $scope.pemilik = false;
        }
    }

    console.log($stateParams.bloodcall_id);
    $scope.url_bc = "http://128.199.188.36:3000/bloodcall/" + $stateParams.bloodcall_id.toString() ;
    $scope.getbc = function() {
        $http({
            method: 'GET',
            url: $scope.url_bc
        }).then(function successCallback(response) {
            console.log(response);
            $scope.bloodcall = response.data;
            console.log($scope.bloodcall);
            $scope.checkuser(response.data.users_id);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getbc();

    $scope.changeState  = function(bloodcall_id) {
        if ($stateParams.bloodcall_id == ''){
            $state.go('menu');
        }

    }
    $scope.changeState();

    $scope.editBC = function (bloodcall_id){
        $state.go('editBC', {'bloodcall_id' : $stateParams.bloodcall_id});
    }

})
.controller('NewsFeedCtrl', function($scope,$http,$stateParams,$state,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    $scope.checkuser = function (user) {
        if (getItem('users_id') == user) {
            $scope.pemilik = true;
        } else {
            $scope.pemilik = false;
        }
    }
    $scope.newsfeed = {};
    console.log($stateParams.newsfeed_id);
    $scope.url_nf = "http://128.199.188.36:3000/newsfeed/" + $stateParams.newsfeed_id.toString() ;
    console.log($scope.url_nf);
    $scope.getnf = function() {
        $http({
            method: 'GET',
            url: $scope.url_nf
        }).then(function successCallback(response) {
            console.log(response);
            $scope.newsfeed = response.data;
            console.log($scope.newsfeed);
            $scope.checkuser(response.data.users_id);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getnf();

    $scope.changeState  = function(newsfeed_id) {
        if ($stateParams.newsfeed_id == ''){
            $state.go('menu');
        }

    }

    $scope.changeState();
    $scope.editNF = function (newsfeed_id){
        $state.go('editNF', {'newsfeed_id' : $stateParams.newsfeed_id});
    }
})
.controller('EventCtrl',function($scope,$http,$stateParams,$state,localStorageService,NgMap){

    $scope.users_id = localStorageService.get('users_id');

    $scope.checkuser = function (user) {
        if ($scope.users_id == user) {
            $scope.pemilik2 = true;
        } else {
            $scope.pemilik2 = false;
        }
    }

    $scope.statuscheck = false;

    console.log($stateParams.event_id);
    $scope.url_ev = "http://128.199.188.36:3000/event/" + $stateParams.event_id.toString() ;
    console.log($scope.url_ev);
    $scope.getev = function() {
        $http({
            method: 'GET',
            url: $scope.url_ev
        }).then(function successCallback(response) {
            console.log(response);
            $scope.events = response.data;
            $scope.waktu = Date.create($scope.events.evdate).relative();
            $scope.evlat = response.data.evlat;
            $scope.evlng = response.data.evlng;
            $scope.checkuser(response.data.users_id);
            // console.log($scope.pemilik2);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getev();

    $scope.changeState  = function(event_id) {
        if ($stateParams.event_id == ''){
            $state.go('menu');
        }

    }
    $scope.changeState();

    var marker;
    var vm = this;
    NgMap.getMap().then(function(map) {
        vm.map = map;
        marker = map.markers[1];
        $scope.userlat = marker.getPosition().lat();
        $scope.userlng = marker.getPosition().lng();
    });

    $scope.editEV = function (event_id){
        $state.go('editEV', {'event_id' : $stateParams.event_id});
    }
})
