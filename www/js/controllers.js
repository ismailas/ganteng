angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('menuCtrl', function($scope, $state, $rootScope) {
    // username
    $scope.name = "Sumail Abdush";
    $scope.statuscheck  = true;
    $scope.tabcheck = 0 ;

    $scope.user = {
            "firstname" : "Chelsea",
            "lastname"  : "Islan",
            "goldar"    : "A",
            "jumdon"    : 9,
            "status"    : true,
            "foto"      : "img/chelsea.jpg",
            "birthdate" : "2 Juni 1995",
            "email"     : "chelseaislan@gmail.com",
            "password"  : "inichelsea123",
            "lastdonate"   : Date.create("2 August 2015"),

    };

    $scope.changeTab = function(newTab){
        $scope.tabcheck = newTab;
    };

    $scope.isTabactive = function(tabcheck){
        return $scope.tabcheck === tabcheck;
    };

    $scope.changeName   = function() {
        $scope.name = "randomed" + Math.random();
    }
    // foto profil
    $scope.pimg = "img/fotoprofil.jpg";

    $scope.changePimg = function(){

    };
    // status donor

    $scope.status = "ready";

    $scope.changeStatus = function() {
        if (today - user.lastdonate >= 90) {
          $scope.status = "ready";
        }
        else {
          $scope.status = today - user.lastdonate + "left";
        }
    };

    // golongan darah
    $scope.goldar = "A";

    $scope.changeGoldar = function(){};

    // jumlah donasi
    $scope.jumdon = 9;

    $scope.changeJumdon = function(){};

    $state.go('menu.event');


})



.controller('profileCtrl', function($scope) {

    $scope.editPassword = false;

    $scope.user = {
            "firstname" : "Chelsea",
            "lastname"  : "Islan",
            "goldar"    : "A",
            "jumdon"    : 6,
            "status"    : true,
            "foto"      : "img/chelsea.jpg",
            "birthdate" :  Date.create("2 June 1995"),
            "email"     : "chelseaislan@gmail.com",
            "password"  : "inichelsea123",
            "lastdonate"   : Date.create("2 July 2016"),

    };

    $scope.submit = function(){
        

    }

})

.controller('signup2Ctrl', function($scope) {



})

.controller('signup3Ctrl', function($scope) {

})

.controller('settingCtrl', function($scope) {

})

.controller('kegiatanCtrl', function($scope) {

})

.controller('BloodCallCtrl', function($scope) {

})

.controller('NewsFeedCtrl', function($scope) {

})

.controller('ForgotPassCtrl', function($scope) {

})

.controller('HistoriCtrl',function($scope){
    $scope.addHistori = false;

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

.controller('EventCtrl',function($scope){
    // $scope.map = { center: { latitude: -6.89309, longitude: 107.6073811 }, zoom: 15 };
    $scope.statuscheck = false;
})

.controller('AboutCtrl',function($scope){

})

.controller('FeedbackCtrl',function($scope){

})

.controller('eventlistCtrl',function($scope){
    // $scope.isClicked = "true";
    // $scope.itemClicked = function(){
    //     $scope.isClicked = "false";
    // };
})

.controller('newsfeedlistCtrl',function($scope){

})

.controller('bloodcalllistCtrl',function($scope){

})

// .controller('MapController', function($scope, $ionicLoading) {
//
//     google.maps.event.addDomListener(window, 'load', function() {
//         console.log('aaa');
//         var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
//
//         var mapOptions = {
//             center: myLatlng,
//             zoom: 16,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//
//         var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//         // navigator.geolocation.getCurrentPosition(function(pos) {
//         //     map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//         //     var myLocation = new google.maps.Marker({
//         //         position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//         //         map: map,
//         //         title: "My Location"
//         //     });
//         // });
//
//         $scope.map = map;
//     });
//
// });
