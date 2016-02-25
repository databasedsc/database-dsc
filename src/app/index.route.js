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
        .state('searchCompanies', {
          url: '/',
          template: '<search-companies></search-companies>'
        })
        .state('companyProfile', {
          url: '/profile',
          template: '<company-profile></company-profile>'
        }),

      $urlRouterProvider.otherwise('/');
    });
})();
