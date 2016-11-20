'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router', 'ngMap', 'ngMaterial', 'myApp.detailsCinema', 'myApp.listeCinema', 'myApp.addCinema'])
    .config(['$stateProvider', router]);

function router($stateProvider) {
    var listeCinemaState = {
        name: 'listeCinema',
        url: '/',
        templateUrl: 'views/listeCinema.html',
        controller: 'listeCinemaCtrl'
    };
    var detailsCinemaState = {
        name: 'detailsCinema',
        url: '/details_cinema/:cinemaId',
        templateUrl: 'views/detailsCinema.html',
        controller: 'DetailsCinemaCtrl'
    };
    var addCinemaState = {
        name: 'addCinema',
        url: '/add_cinema',
        templateUrl: 'views/addCinema.html',
        controller: 'AddCinemaCtrl'
    };

    $stateProvider.state(listeCinemaState);
    $stateProvider.state(detailsCinemaState);
    $stateProvider.state(addCinemaState);
}