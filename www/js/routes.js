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

  .state('signup', {
    url: '/signuppage',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu', {
    url: '/menupage',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('profile', {
    url: '/profilepage',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('signup2', {
    url: '/signup2page',
    templateUrl: 'templates/signup2.html',
    controller: 'signup2Ctrl'
  })

  .state('signup3', {
    url: '/signup3page',
    templateUrl: 'templates/signup3.html',
    controller: 'signup3Ctrl'
  })

  .state('setting', {
    url: '/settingpage',
    templateUrl: 'templates/setting.html',
    controller: 'settingCtrl'
  })

  .state('kegiatan', {
    url: '/kegiatanpage',
    templateUrl: 'templates/kegiatan.html',
    controller: 'kegiatanCtrl'
  })

$urlRouterProvider.otherwise('/loginpage')



});