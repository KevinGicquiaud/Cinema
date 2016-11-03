'use strict';

angular.module('myApp.listeCinema', [])

    .controller("listeCinemaCtrl", ['$scope', '$http', function ($scope, $http, NgMap) {

        $http.get('data/cinema.json').then(function (response) {
            $scope.cinemas = response.data;
        });

        var vm = this;
        $scope.map = {center: {latitude: 46.1577, longitude: -1.15359}, zoom: 8};

    }]);