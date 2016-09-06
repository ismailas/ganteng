angular.module('app.listctrls', [])

.controller('eventlistCtrl',function($scope,$http,$state,localStorageService){

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    // $scope.isClicked = "true";
    // $scope.itemClicked = function(){
    //     $scope.isClicked = "false";
    // };
    $scope.checktoday = function (day) {
        return day.isToday();
    }

    $scope.getEVlist = function() {
        $http({
            method: 'GET',
            url: 'http://128.199.188.36:3000/event'
        }).then(function successCallback(response) {
            console.log(response);
            console.log('callback berhasil');
            $scope.evlist = [];

            _.each(response.data.rows, function(value, key) {
                value.waktu = Date.create(value.evdate).relative();
                value.waktu2 = Date.create(value.evdate).isToday();
                value.waktu3 = Date.create(value.evdate).isBetween('yesterday', '3 week from now');
                $scope.evlist.push(value);
            });

            console.log($scope.evlist);
            // $scope.waktu = Date.create($scope.evlist.evdate).relative();
        }, function errorCallback(response) {
            console.log('wah error');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
    $scope.getEVlist();

    $scope.changeState  = function(event_id) {
        $state.go('Event', {'event_id' : event_id});
    }

})
.controller('newsfeedlistCtrl',function($scope,$http,$state,localStorageService){

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    $scope.getnflist = function() {
        $http({
            method: 'GET',
            url: 'http://128.199.188.36:3000/newsfeed'
        }).then(function successCallback(response) {
            console.log(response);
            console.log('callback berhasil');
            $scope.nflist = response.data.rows;
        }, function errorCallback(response) {
            console.log('wah error');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getnflist();

    $scope.changeState  = function(newsfeed_id) {
        $state.go('NewsFeed', {'newsfeed_id' : newsfeed_id});
    }

})
.controller('bloodcalllistCtrl',function($scope, $http, $state,localStorageService){


    $scope.users_id = localStorageService.get('users_id');

    $scope.checkprior = function (prior){
        if (prior ==2){
            return 'urgent'
        }else if (prior == 3) {
            return 'danger'
        } else {
            return 'needed'
        }
    }

    $scope.getBClist = function() {
        $http({
            method: 'GET',
            url: 'http://128.199.188.36:3000/bloodcall'
        }).then(function successCallback(response) {
            console.log(response);
            console.log('callback berhasil');
            $scope.BClist = response.data.rows;
        }, function errorCallback(response) {
            console.log('wah error');
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getBClist();

    $scope.changeState  = function(bloodcall_id) {
        $state.go('BloodCall', {'bloodcall_id' : bloodcall_id});
    }



})
