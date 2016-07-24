angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('menuCtrl', function($scope, $state) {
    // username
    $scope.name = "Sumail Abdush";
    $scope.statuscheck  = true;
    $scope.tabcheck = 0 ;

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
    $scope.jumdon = "3";

    $scope.changeJumdon = function(){};

    $state.go('menu.event');


})



.controller('profileCtrl', function($scope) {

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

})

.controller('EventCtrl',function($scope){
    $scope.map = { center: { latitude: -6.89309, longitude: 107.6073811 }, zoom: 15 };
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
