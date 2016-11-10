'use strict';
angular.module('myApp.addCinema', [])

.controller("AddCinemaCtrl", ['$scope', '$http', function ($scope, $http) {
    $http.get('').success(function (data) {
        $scope.mydata = data;
    });
}]);