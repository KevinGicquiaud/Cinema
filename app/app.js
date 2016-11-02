'use strict';

// Declare app level module which depends on views, and components
angular.module('cinema', [
  'ngRoute',
  'cinema.view1',
  'cinema.view2',
  'cinema.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
