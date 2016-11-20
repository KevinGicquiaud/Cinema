'use strict';
angular.module('myApp.detailsCinema', [])

    .controller("DetailsCinemaCtrl", ['$scope', '$http', '$stateParams', '$mdDialog', function ($scope, $http, $stateParams, $mdDialog) {
        $http.get('http://localhost/Cinema/public/index.php/cinema/' + $stateParams.cinemaId).success(function (data) {
            $scope.detailsCine = data[0];
        });
        $http.get('http://localhost/Cinema/public/index.php/cinema/' + $stateParams.cinemaId + '/film').success(function (data) {
            $scope.films = data;



            var displayHoraire = '';
            var horaires = new Array();


            $scope.showAlert = function(ev) {
                $http.get(
                    'http://localhost/Cinema/public/index.php/cinema/'
                    + $stateParams.cinemaId
                    + '/film/' + ev + '/horaire/').success(function (data) {
                    horaires = [];
                    for(var i = 0; i < data.length; i++) {
                        horaires.push(data[i].horaire);
                    }
                    console.log(horaires.length);
                    displayHoraire = '';
                    for(var i = 0; i < horaires.length; i++) {
                        displayHoraire += horaires[i];
                        displayHoraire += ' ';
                        console.log('display', displayHoraire);
                    }

                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Voici les horaires pour votre film')
                            .textContent(displayHoraire)
                            .ariaLabel('Alert Dialog Demo')
                            .ok('OK!')
                            .targetEvent(ev)
                    );
                });


            };
        });
        $scope.map = {center: {latitude: 46.1577, longitude: -1.15359}, zoom: 8};

    }]);