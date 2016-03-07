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
          url: '/company/:id',
          template: '<company-profile></company-profile>'
        })
        .state('searchMultinationals', {
          url: '/mtns',
          template: '<search-multinationals></search-multinationals>'
        })
        .state('searchInvestors', {
          url: '/investors',
          template: '<search-investors></search-investors>'
        })
        .state('investorProfile', {
          url: '/investor/:id',
          template: '<investor-profile></investor-profile>'
        })
        .state('searchHubs', {
          url: '/hubs',
          template: '<search-hubs></search-hubs>'
        })
        .state('hubProfile', {
          url: '/hub/:id',
          template: '<hub-profile></hub-profile>'
        })
        ,

      $urlRouterProvider.otherwise('/');
    });
})();
