'use strict';

angular.module('cinema.detailsCinema', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details_cinema', {
    templateUrl: 'view/detailsCinema.html',
    controller: 'DetailsCinemaCtrl'
  });
}])

.controller('DetailsCinemaCtrl', [function() {

}]);