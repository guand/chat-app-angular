'use strict';

angular.module('chatAppAngularApp')
	.controller('ChatCtrl', function ($scope, $http, setting) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get(setting.apiurl + '/chats')
		.success(function(data) {
      $scope.chats = data;
		  console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	})
  .factory('socket', function ($rootScope) {
    var socket = io.connect('https://localhost:3001',{secure: true, port:3001});
    return {
      on: function (eventName, callback) {
        socket.on(eventName, function() {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function() {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        });
      }
    };
  });
  
  