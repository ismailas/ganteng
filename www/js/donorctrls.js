angular.module('app.donorctrls', [])
.controller('selfcheckCtrl', function($scope,$http,localStorageService,$ionicPopup,localStorageService) {
    $scope.users_id = localStorageService.get('users_id');

    // $scope.daycount = "";

    $scope.getuser = function() {
        // $scope.urlcall();
        var url_user    = "http://128.199.188.36:3000/users/" + localStorageService.get('users_id');

        $http({
            method: 'GET',
            url: url_user
        }).then(function successCallback(response) {
            console.log(response);
            $scope.oldday = response.data.daycount;
        }, function errorCallback(response) {
        });
    }
    $scope.getuser();


    $scope.showPopup = function(day) {
        // $scope.dayz = day;

       // An elaborate, custom popup
       var myPopup = $ionicPopup.show({
        //  template: '<b> {{daycount}} </b>',
         title: 'ADD DAY TO COUNTDOWN',
        //  subTitle:'Hari tambahan',
        //  cssClass: '.popup',
         scope: $scope,
         buttons: [
           { text: 'CANCEL',
            type: 'button-light',
            },
           {
             text: '<b>ADD</b>',
             type: 'button-assertive',
             onTap: function(e) {
                 $scope.newday = $scope.oldday + day;
                 $scope.putDay();
             }
           },
         ]
       });
       myPopup.then(function(res) {
         console.log('Tapped!', res);
       });
      };

    // $scope.newday.daycount = "";

    $scope.putDay = function() {
        $http({
            method: 'PUT',
            url: 'http://128.199.188.36:3000/users/addday/'+$scope.users_id,
            data: $scope.newday
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
})
.controller('HistoriCtrl',function($scope,$state,$http,$stateParams,localStorageService){
    $scope.addHistori = false;

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    $scope.user = {
        "firstname"     : "Chelsea",
        "lastname"      : "Islan",
        "goldar"        : "A",
        "firstjumdon"   : 6,
        "firstlastdonation" : Date.create("2 August 2015"),
        "status"        : true,
        "foto"          : "img/chelsea.jpg",
        "birthdate"     : "2 Juni 1995",
        "email"         : "chelseaislan@gmail.com",
        "password"      : "inichelsea123",
        "lastdonate"    : Date.create("2 August 2015"),
        "jumdon"        : 9,
        "histori"       : [
            {
                "type"      : "event",
                "evname"    : "Donor Bersama Bapak Mahdan",
                "hisdate"   : Date.create("2 July 2016"),
                "address"   : "Jl.Sangkuriang C2, Bandung"
            },
            {
                "type"      : "event",
                "evname"    : "Donor Bersama Bapak Dendi",
                "hisdate"   : Date.create("3 April 2016"),
                "address"   : "Jl.Sangkuriang L2, Bandung"
            },
            {
                "type"      : "private",
                // "evname"    : "Donor Bersama Bapak Dendi",
                "hisdate"   : Date.create("2 February 2016"),
                // "address"   : "Jl.Sangkuriang L2, Bandung"
            },
        ]
    };

    $scope.waktu = Date.create($scope.user.lastdonate).relative();
    $scope.timeStamp = function(tanggal){
        $scope.timelapse = Date.create(tanggal).relative();
        return $scope.timelapse;
    };


    $scope.newdate = Date.create("today");
    $scope.submit = function() {
        if ($scope.newdate) {
            $scope.user.histori.push({
                hisdate : this.newdate,
                type    : "private"
            });
            $scope.newdate = Date.create("today");
            $scope.user.jumdon = $scope.user.jumdon + 1 ;
            console.log( $scope.user.jumdon);
        }
    };

    $scope.hiprivate = false;
    // $scope.isPrivate = function(type){
    //     if {
    //         type == "private";
    //         return $scope.hiprivate = true;
    //     };
    // };
    $scope.reverse = true;
    // $scope.shorting = function() {
    //     return $scope.short
    // };


})
