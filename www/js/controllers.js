angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('menuCtrl', function($scope) {
    // username
    $scope.name = "Sumail Abdush";
    $scope.statuscheck  = true;

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

})
