angular.module('app.donorctrls', [])
.controller('selfcheckCtrl', function($scope,$http,localStorageService,$ionicPopup) {

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
