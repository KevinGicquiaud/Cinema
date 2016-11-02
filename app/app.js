'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router', 'uiGmapgoogle-maps', 'myApp.detailsCinema', 'myApp.listeCinema'])
    .config(['$stateProvider','uiGmapGoogleMapApiProvider', router, configMap]);

function router($stateProvider) {
  var listeCinemaState = {
    name: 'listeCinema',
    url: '/',
    templateUrl: 'views/listeCinema.html',
    controller: 'listeCinemaCtrl'
  };
  var detailsCinemaState = {
    name: 'detailsCinema',
    url: '/details_cinema',
    templateUrl: 'views/detailsCinema.html',
    controller: 'DetailsCinemaCtrl'
  };

  $stateProvider.state(listeCinemaState);
  $stateProvider.state(detailsCinemaState);
}

function configMap(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    v: '3.20',
    libraries: 'weather,geometry,visualization'
  });
}
