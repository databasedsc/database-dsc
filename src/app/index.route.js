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
          templateUrl: 'app/modules/admin/dashboard.html'
        })
        .state('admin.companies', {
          template: '<admin-companies ui-view></admin-companies>'
        })
        .state('admin.companies.index', {
          url: '/admin/companies',
          template: '<admin-companies-index></admin-companies-index>'
        })
        .state('admin.companies.new', {
          url: '/admin/companies/new',
          template: '<admin-companies-new></admin-companies-new>'
        })
        .state('admin.companies.edit', {
          url: '/admin/companies/:id/edit',
          template: '<admin-companies-edit></admin-companies-edit>'
        })
        .state('admin.multinationals', {
          template: '<admin-multinationals ui-view></admin-multinationals>'
        })
        .state('admin.multinationals.index', {
          url: '/admin/multinationals',
          template: '<admin-multinationals-index></admin-multinationals-new>'
        })
        .state('admin.multinationals.new', {
          url: '/admin/multinationals/new',
          template: '<admin-multinationals-new></admin-multinationals-new>'
        })
        .state('admin.multinationals.edit', {
          url: '/admin/multinationals/:id/edit',
          template: '<admin-multinationals-edit></admin-multinationals-edit>'
        })
        .state('admin.investors', {
          template: '<admin-investors ui-view></admin-investors>'
        })
        .state('admin.investors.index', {
          url: '/admin/investors',
          template: '<admin-investors-index></admin-investors-index>'
        })
        .state('admin.investors.new', {
          url: '/admin/investors/new',
          template: '<admin-investors-new></admin-investors-new>'
        })
        .state('admin.investors.edit', {
          url: '/admin/investors/:id/edit',
          template: '<admin-investors-edit></admin-investors-edit>'
        })
        .state('search', {
          templateUrl: 'app/search.html'
        })
        .state('search.home', {
          url: '/',
          template: '<home></home>'
        })
        .state('search.searchCompanies', {
          url: '/companies',
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
