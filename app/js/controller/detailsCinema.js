'use strict';
angular.module('myApp.detailsCinema', [])

.controller("DetailsCinemaCtrl", ['$scope', '$http', function ($scope, $http) {
    $http.get('data/cinema.json').success(function (data) {
        $scope.mydata = data;
    });
}]);