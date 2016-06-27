angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu', {
    url: '/page4',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('profile', {
    url: '/page5',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('signup2', {
    url: '/page6',
    templateUrl: 'templates/signup2.html',
    controller: 'signup2Ctrl'
  })

  .state('signup3', {
    url: '/page8',
    templateUrl: 'templates/signup3.html',
    controller: 'signup3Ctrl'
  })

  .state('setting', {
    url: '/page9',
    templateUrl: 'templates/setting.html',
    controller: 'settingCtrl'
  })

  .state('kegiatan', {
    url: '/page10',
    templateUrl: 'templates/kegiatan.html',
    controller: 'kegiatanCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});