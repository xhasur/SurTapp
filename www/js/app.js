var App = angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova','chart.js'])
  //ionic-material

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('app', {
            url: '/app',
            cache:false,
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
          })
          .state('app.principalMenu', {
            url: '/principalMenu',
            cache:false,
            views: {
              'menuContent': {
                templateUrl: 'js/principal/templates/principal.html',
                controller: 'principalCtrl'
              }
            }
          })
          .state('principal', {
            url: "/principal",
            templateUrl: 'js/principal/templates/principal.html',
           controller: 'principalCtrl'
          })
          .state('pedidos', {
              url: "/pedidos",
              templateUrl: 'js/pedidos/templates/pedidos.html',
              controller: 'pedidosCtrl'
          })
          .state('pedidosProductos', {
              url: "/pedidosProductos/:idTipoProduct",
              templateUrl: 'js/pedidos/templates/pedidosProductos.html',
              controller: 'pedidosProductosCtrl'
          })
        .state('indicadores', {
          url: "/indicadores",
          templateUrl: 'js/indicadores/templates/indicadores.html',
          controller: 'indicadoresCtrl'
        })
      ;
      $urlRouterProvider.otherwise('/principal');

    });



