'use strict';

angular.module('myApp.listeCinema', [])

.controller("listeCinemaCtrl", ['$scope', '$http', function ($scope, $http) {

  $http.get('data/cinema.json').then(function (response) {
    $scope.cinemas = response.data;
  });

}]);