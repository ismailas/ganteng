angular.module('app.controllers', [])

.controller('loginCtrl', function($scope,$http,$state,localStorageService) {

    $scope.email        = "";
    $scope.password     = "";
    $scope.login        = [];

    function submitLS(key, val) {
        return localStorageService.set(key, val);
    }
    function getItem(key) {
        return localStorageService.get(key);
    }
    // $scope.users_id     = "";
    console.log('login');

    $scope.submitLogin  = function(email,password){
        $scope.login    = {
            "email"     : email,
            "password"  : password
        };
        console.log($scope.login);
        $scope.postUser = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: $scope.login
            }).then(function successCallback(response) {
                console.log(response);
                $scope.users_id = response.data.users_id;
                console.log($scope.users_id);
                // $state.go('menu', {'users_id' : $scope.users_id});
                submitLS('users_id',$scope.users_id);
                console.log(getItem('users_id'));
            }, function errorCallback(response) {

                alert("something wrong!");
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
        $scope.postUser();



    }

})

.controller('signupCtrl', function($scope,$state,$http) {

    $scope.firstname    = "";
    $scope.lastname     = "";
    $scope.birthdate    = "";
    $scope.goldar       = "";
    $scope.jumdon       = "";
    $scope.firstjumdon  = "";
    $scope.lastdonate   = "";
    $scope.email        = "";
    $scope.password     = "";

    $scope.signup       = [];

    console.log('signup pendonor');

    $scope.submitUser   = function(firstname,lastname,birthdate,goldar,jumdon,lastdonate,email,password){

        $scope.signup   = {
            "firstname"     : firstname,
            "lastname"      : lastname,
            "birthdate"     : birthdate,
            "goldar"        : goldar,
            "jumdon"        : jumdon,
            "firstjumdon"   : jumdon,
            "lastdonate"    : lastdonate,
            "email"         : email,
            "password"      : password,
            "typeuser"      : false
        };
        console.log($scope.signup);
        console.log('tes');
        $state.go('login');

        $scope.postUser = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/users',
                data: $scope.signup
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postUser();

    }

})

.controller('signup2Ctrl', function($scope,$state,$http,$stateParams) {

    $scope.firstname    = "";
    $scope.lastname     = "";
    $scope.cabang       = "";
    $scope.token        = "";
    $scope.email        = "";
    $scope.password     = "";

    $scope.signup       = [];

    console.log('signup PMI');

    $scope.submitUser   = function(firstname,lastname,cabang,token,email,password){

        $scope.signup   = {
            "firstname"     : firstname,
            "lastname"      : lastname,
            "cabang"        : cabang,
            "token"         : token,
            "email"         : email,
            "password"      : password,
            "typeuser"      : true
        };
        console.log($scope.signup);
        console.log('tes');
        $state.go('login');

        $scope.postUser = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/users',
                data: $scope.signup
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postUser();

    }

})

.controller('signup3Ctrl', function($scope,$stateParams,$state,$http) {

    $scope.firstname    = $stateParams.signup2.firstname;
    $scope.lastname     = $stateParams.signup2.lastname;
    $scope.birthdate    = $stateParams.signup2.birthdate;
    $scope.goldar       = $stateParams.signup2.goldar;
    $scope.jumdon       = $stateParams.signup2.jumdon;
    $scope.firstjumdon  = $stateParams.signup2.firstjumdon;
    $scope.lastdonate   = $stateParams.signup2.lastdonate;
    $scope.email        = "";
    $scope.password     = "";
    $scope.copassword   = "";
    console.log("signup3");
    console.log($stateParams.signup2);

    $scope.submitUser   = function(){
        $scope.signup3   = {
            "firstname"     : $scope.firstname,
            "lastname"      : $scope.lastname,
            "birthdate"     : $scope.birthdate,
            "goldar"        : $scope.goldar,
            "jumdon"        : $scope.jumdon,
            "firstjumdon"   : $scope.firstjumdon,
            "lastdonate"    : $scope.lastdonate,
            "email"         : $scope.email,
            "password"      : $scope.password
        };

        console.log($scope.signup3);
    }



})

.controller('menuCtrl', function($scope, $state,$stateParams,$http, $rootScope,localStorageService) {
    // username
    $scope.name = "Sumail Abdush";
    $scope.statuscheck  = true;
    $scope.tabcheck = 0 ;

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');


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
    console.log('menu');
    console.log($stateParams.users_id);
    $scope.urlx = "http://localhost:3000/users/" + $scope.users_id.toString();
    console.log($scope.urlx);
    $scope.getuser = function() {
        $http({
            method: 'GET',
            url: $scope.urlx
        }).then(function successCallback(response) {
            console.log(response);
            $scope.user = response.data;
            console.log($scope.user);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
    $scope.getuser();

    $scope.changeState  = function(user_id) {
        if ($scope.users_id == ''){
            $state.go('login');
        } else {
            $state.go('menu.event');
        }

    }
    $scope.changeState();

    // $scope.inputBC = function(){
    //     $state.go('inputBC', {'users_id' : $scope.user.users_id});
    // };
    // $scope.inputNF = function(){
    //     $state.go('inputNF', {'users_id' : $scope.user.users_id});
    // };
    // $scope.inputEV = function(){
    //     $state.go('inputEV', {'users_id' : $scope.user.users_id});
    // };
    //
    // $scope.editprof = function (){
    //     $state.go('profile', {'users_id' : $scope.user.users_id});
    // }

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
    // $scope.goldar = "A";

    $scope.changeGoldar = function(){};

    // jumlah donasi
    // $scope.jumdon = 9;

    $scope.changeJumdon = function(){};




})
.controller('profileCtrl', function($scope,$state,$stateParams,$http,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

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


    };

    console.log('profile');
    console.log($scope.users_id);
    $scope.urlx = "http://localhost:3000/users/" + $scope.users_id.toString();
    console.log($scope.urlx);
    $scope.getuser = function() {
        $http({
            method: 'GET',
            url: $scope.urlx
        }).then(function successCallback(response) {
            console.log(response);
            $scope.user = response.data;
            console.log($scope.user);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

    $scope.getuser();

    $scope.changeState  = function(user_id) {
        if ($scope.users_id == ''){
            $state.go('login');
        }
    }
    $scope.changeState();

})

.controller('settingCtrl', function($scope,localStorageService) {

})

.controller('kegiatanCtrl', function($scope) {

})

.controller('BloodCallCtrl', function($scope,$http,$stateParams,$state,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    console.log($stateParams.bloodcall_id);
    $scope.url_bc = "http://localhost:3000/bloodcall/" + $stateParams.bloodcall_id.toString() ;
    $scope.getbc = function() {
        $http({
            method: 'GET',
            url: $scope.url_bc
        }).then(function successCallback(response) {
            console.log(response);
            $scope.bloodcall = response.data;
            console.log($scope.bloodcall);
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

})
.controller('NewsFeedCtrl', function($scope,$http,$stateParams,$state,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    console.log($stateParams.newsfeed_id);
    $scope.url_nf = "http://localhost:3000/newsfeed/" + $stateParams.newsfeed_id.toString() ;
    console.log($scope.url_nf);
    $scope.getnf = function() {
        $http({
            method: 'GET',
            url: $scope.url_nf
        }).then(function successCallback(response) {
            console.log(response);
            $scope.newsfeed = response.data;
            console.log($scope.newsfeed);
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
})
.controller('EventCtrl',function($scope,$http,$stateParams,$state,localStorageService){

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    // $scope.map = { center: { latitude: -6.89309, longitude: 107.6073811 }, zoom: 15 };
    $scope.statuscheck = false;

    console.log($stateParams.event_id);
    $scope.url_ev = "http://localhost:3000/event/" + $stateParams.event_id.toString() ;
    console.log($scope.url_ev);
    $scope.getev = function() {
        $http({
            method: 'GET',
            url: $scope.url_ev
        }).then(function successCallback(response) {
            console.log(response);
            $scope.events = response.data;
            $scope.waktu = Date.create($scope.events.evdate).relative();
            console.log($scope.events);
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

})

.controller('inputBCCtrl', function($scope,$state,$http,$stateParams,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    // $scope.firstname    = "";
    // $scope.lastname     = "";
    // $scope.cabang       = "";
    // $scope.token        = "";
    // $scope.email        = "";
    // $scope.password     = "";

    $scope.bloodcall       = [];

    console.log('Input BloodCall');

    $scope.submitBC   = function(bcgoldar,bcatasnama,bcdate,bcpriority,bcketerangan){

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
        $state.go('menu');

        $scope.postBC = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/bloodcall',
                data: $scope.bloodcall
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postBC();

    }

})
.controller('inputNFCtrl', function($scope,$state,$http,$stateParams,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    // $scope.firstname    = "";
    // $scope.lastname     = "";
    // $scope.cabang       = "";
    // $scope.token        = "";
    // $scope.email        = "";
    // $scope.password     = "";

    $scope.newsfeed       = [];

    console.log('Input News');

    $scope.submitNF   = function(nfjudul,nfimage,nfcontent){

        $scope.newsfeed   = {
            "nfjudul"     : nfjudul,
            "nfimage"     : nfimage,
            "nfcontent"   : nfcontent,
            "users_id"    : $scope.users_id
        };
        console.log($scope.newsfeed);
        console.log('tes');
        $state.go('menu');

        $scope.postNF = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/newsfeed',
                data: $scope.newsfeed
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY INPUT');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('INPUT FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postNF();

    }

})
.controller('inputEVCtrl', function($scope,$state,$http,$stateParams,localStorageService) {

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    // $scope.firstname    = "";
    // $scope.lastname     = "";
    // $scope.cabang       = "";
    // $scope.token        = "";
    // $scope.email        = "";
    // $scope.password     = "";

    $scope.bloodcall       = [];

    console.log('Input Event');

    $scope.submitEV   = function(evname,evorganizer,evaddress,evdate,evlat,evlong){

        $scope.events       = {
            "evname"        : evname,
            "evorganizer"   : evorganizer,
            "evaddress"     : evaddress,
            "evdate"        : evdate,
            "evlat"         : evlat,
            "evlong"        : evlong,
            "users_id"      : $scope.users_id
        };
        console.log($scope.events);
        console.log('tes');
        $state.go('menu');

        $scope.postEV = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/event',
                data: $scope.events
            }).then(function successCallback(response) {
                console.log(response);
                console.log('SUCCESFULLY SIGNED UP');
                // response.data = $scope.signup ;
            }, function errorCallback(response) {
                console.log('SIGNING UP FAILED');
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }

        $scope.postEV();

    }

})

.controller('ForgotPassCtrl', function($scope,$http) {

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


.controller('AboutCtrl',function($scope){

})
.controller('FeedbackCtrl',function($scope){

})

.controller('eventlistCtrl',function($scope,$http,$state,localStorageService){

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    // $scope.isClicked = "true";
    // $scope.itemClicked = function(){
    //     $scope.isClicked = "false";
    // };

    $scope.getEVlist = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/event'
        }).then(function successCallback(response) {
            console.log(response);
            console.log('callback berhasil');
            $scope.evlist = [];

            _.each(response.data.rows, function(value, key) {
                value.waktu = Date.create(value.evdate).relative();
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
            url: 'http://localhost:3000/newsfeed'
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

    function getItem(key) {
        return localStorageService.get(key);
    }
    $scope.users_id = getItem('users_id');

    $scope.getBClist = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/bloodcall'
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
