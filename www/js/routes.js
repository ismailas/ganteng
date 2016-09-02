angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



    .state('login', {
        url: '/loginpage',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })

    .state('selfcheck', {
        url: '/selfcheck',
        templateUrl: 'templates/selfcheck.html',
        controller: 'selfcheckCtrl'
    })



    .state('menu', {
        url: '/menu',

        // abstract : true,
        controller: 'menuCtrl',
        templateUrl: 'templates/menu.html',
        params: {
            users_id    : '',
        }
    })

    .state('menu.event', {
        url: '/event',
        templateUrl: 'templates/eventlist.html',
        controller: 'eventlistCtrl'
        // views: {
        //     'menu-event': {
        //     }
        // }
    })

    .state('menu.news', {
        url: '/news',
        templateUrl: 'templates/newsfeedlist.html',
        controller: 'newsfeedlistCtrl'
        // views: {
        //     'menu-news': {
        //     }
        // }
    })

    .state('menu.bloodcall', {
        url: '/bloodcall',
        templateUrl: 'templates/bloodcalllist.html',
        controller: 'bloodcalllistCtrl'
        // views: {
        //     'menu-bloodcall': {
        //     }
        // }
    })

    .state('profile', {
        url: '/profilepage',
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl',
        params: {
            users_id    : '',
        }
    })

    .state('signup', {
        url: '/signuppage',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
    })

    .state('signup2', {
        url: '/signup2page',
        templateUrl: 'templates/signup2.html',
        controller: 'signup2Ctrl',
        params: {
            signup    : '',
        }
    })


    .state('setting', {
        url: '/settingpage',
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
    })

    .state('BloodCall', {
        url: '/BloodCallpage',
        templateUrl: 'templates/BloodCall.html',
        controller: 'BloodCallCtrl',
        params: {
            bloodcall_id    : '',
        }
    })

    .state('NewsFeed', {
        url: '/NewsFeedpage',
        templateUrl: 'templates/NewsFeed.html',
        controller: 'NewsFeedCtrl',
        params: {
            newsfeed_id    : '',
        }
    })

    .state('Event', {
        url: '/Eventpage',
        templateUrl: 'templates/Event.html',
        controller: 'EventCtrl',
        params: {
            event_id    : '',
        }
    })

    .state('inputBC', {
        url: '/inputBC',
        templateUrl: 'templates/inputBC.html',
        controller: 'inputBCCtrl',
        params: {
            users_id    : '',
        }
    })
    .state('inputNF', {
        url: '/inputNF',
        templateUrl: 'templates/inputNF.html',
        controller: 'inputNFCtrl',
        params: {
            users_id    : '',
        }
    })
    .state('inputEV', {
        url: '/inputEV',
        templateUrl: 'templates/inputEV.html',
        controller: 'inputEVCtrl',
        params: {
            users_id    : '',
        }
    })


    .state('ForgotPass', {
        url: '/ForgotPasspage',
        templateUrl: 'templates/ForgotPass.html',
        controller: 'ForgotPassCtrl'
    })

    .state('Histori', {
        url: '/Historipage',
        templateUrl: 'templates/Histori.html',
        controller: 'HistoriCtrl',

    })




    .state('about', {
        url: '/aboutpage',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
    })

    .state('feedback', {
        url: '/feedbackpage',
        templateUrl: 'templates/feedback.html',
        controller: 'FeedbackCtrl'
    })

    $urlRouterProvider.otherwise('/loginpage')



});
