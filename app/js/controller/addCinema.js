angular.module('myApp.addCinema', [])

    .controller("AddCinemaCtrl", ['$scope', '$http', function ($scope, $http, NgMap) {

        console.log(location);
        $http.get('http://localhost/Cinema/public/index.php/cinema').then(function (response) {
            $scope.cinemas = response.data;
        });

        var vm = this;
        $scope.map = {center: {latitude: 46.1577, longitude: -1.15359}, zoom: 8};


    }]);