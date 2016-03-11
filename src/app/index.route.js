(function() {
  'use strict';

  angular
    .module('dscFe')
    .config(function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          template: '<div class="container"><login></login></div>'
        })
        .state('admin', {
          template: '<admin></admin>'
        })
        .state('admin.dashboard', {
          url: '/admin',
          template: 'hi'
        })
        .state('admin.companies', {
          template: '<admin-companies ui-view></admin-companies>'
        })
        .state('admin.companies.new', {
          url: '/admin/companies',
          template: '<admin-companies-new></admin-companies-new>'
        })
        .state('search', {
          templateUrl: 'app/search.html'
        })
        .state('search.home', {
          url: '/home',
          template: '<home></home>'
        })
        .state('search.searchCompanies', {
          url: '/',
          template: '<search-companies></search-companies>'
        })
        .state('search.companyProfile', {
          url: '/company/:id',
          template: '<company-profile></company-profile>'
        })
        .state('search.searchMultinationals', {
          url: '/mtns',
          template: '<search-multinationals></search-multinationals>'
        })
        .state('search.multinationalProfile', {
          url: '/mtns/:id',
          template: '<multinational-profile></multinational-profile>'
        })
        .state('search.searchInvestors', {
          url: '/investors',
          template: '<search-investors></search-investors>'
        })
        .state('search.investorProfile', {
          url: '/investor/:id',
          template: '<investor-profile></investor-profile>'
        })
        .state('search.searchHubs', {
          url: '/hubs',
          template: '<search-hubs></search-hubs>'
        })
        .state('search.hubProfile', {
          url: '/hub/:id',
          template: '<hub-profile></hub-profile>'
        })
        ,

      $urlRouterProvider.otherwise('/');
    });
})();
