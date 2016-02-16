(function() {
  'use strict';

  angular
    .module('dscFe')
    .config(function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          template: '<home></home>'
        });

      $urlRouterProvider.otherwise('/');
    });
})();
