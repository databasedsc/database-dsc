(function() {
  'use strict';

  angular
    .module('dscFe')
    .config(function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          template: '<home></home>'
        })
        .state('searchResults', {
          url: '/',
          template: '<search-results></search-results>'
        }),

      $urlRouterProvider.otherwise('/');
    });
})();
