'use strict';
angular.module('myApp.detailsCinema', [])

    .controller("DetailsCinemaCtrl", ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams, cinemaApi) {
        $http.get('http://localhost/Cinema/public/index.php/cinema/' + $stateParams.cinemaId).success(function (data) {
            $scope.detailsCine = data[0];
        });
        $http.get('http://localhost/Cinema/public/index.php/cinema/' + $stateParams.cinemaId + '/film').success(function (data) {
            $scope.films = data;
        });
        $scope.map = {center: {latitude: 46.1577, longitude: -1.15359}, zoom: 8};
    }]);