'use strict';

angular.module('chatAppAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .constant('setting', {apiurl: 'http://localhost:3000'})
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $routeProvider
      .when('/chats', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// angular.module('chatAppAngularApp1', [])
//  .config(function ($chatLog) {
//     $chatLog.chats = [
//       {
//         'me': 'Hello World!',
//         'you': 'Sup?!'
//       },
//       {
//         'me': 'whatup',
//         'you': 'alot apparently'
//       }
//     ];
//   });

  // var chatApp = angular.module('chatApp', []);
  // chatApp.controller('chatTest', function($scope){
  //   $scope.chats = [
  //     {
  //       'me': 'Hello World!',
  //       'you': 'Sup?!'
  //     },
  //     {
  //       'me': 'whatup',
  //       'you': 'alot apparently'
  //     }
  //   ];
  // });
