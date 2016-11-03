'use strict';

angular.module('myApp.listeCinema', [])

.controller("listeCinemaCtrl", ['$scope', '$http', function ($scope, $http, NgMap) {

  $http.get('data/cinema.json').then(function (response) {
    $scope.cinemas = response.data;
  });

  var vm = this;
  NgMap.getMap().then(function(map) {
    vm.showCustomMarker= function(evt) {
      map.customMarkers.foo.setVisible(true);
      map.customMarkers.foo.setPosition(this.getPosition());
    };
    vm.closeCustomMarker= function(evt) {
      this.style.display = 'none';
    };
  });

}]);