angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('menuCtrl', function($scope) {
    $scope.name = "Sumail Abdush";

    $scope.changeName   = function() {
        $scope.name = "randomed" + Math.random();
    }
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
