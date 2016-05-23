(function() {
  'use strict';

  angular
    .module('dscFe')
    .config(function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('userLogin', {
          url: '/user/login',
          template: '<div class="container"><user-login></user-login></div>'
        })
        .state('userSignUp', {
          url: '/user/signup',
          template: '<div class="container"><user-signup></user-signup></div>'
        })
        .state('user', {
          template: '<user></user>'
        })
        .state('user.profile', {
          url: '/user',
          template: '<user-profile-edit></user-profile-edit>'
        })
        .state('user.companies', {
          template: '<user-companies ui-view></user-companies>'
        })
        .state('user.companies.index', {
          url: '/user/companies',
          template: '<user-companies-index></user-companies-index>'
        })
        .state('user.companies.edit', {
          url: '/user/companies/:id/edit',
          template: '<user-companies-edit></user-companies-edit>'
        })
        .state('user.companies.new', {
          url: '/user/companies/new',
          template: '<user-companies-new></user-companies-new>'
        })
        .state('user.multinationals', {
          template: '<user-multinationals ui-view></user-multinationals>'
        })
        .state('user.multinationals.index', {
          url: '/user/multinationals',
          template: '<user-multinationals-index></user-multinationals-index>'
        })
        .state('user.multinationals.new', {
          url: '/user/multinationals/new',
          template: '<user-multinationals-new></user-multinationals-new>'
        })
        .state('user.multinationals.edit', {
          url: '/user/multinationals/:id/edit',
          template: '<user-multinationals-edit></user-multinationals-edit>'
        })
        .state('user.investors', {
          template: '<user-investors ui-view></user-investors>'
        })
        .state('user.investors.index', {
          url: '/user/investors',
          template: '<user-investors-index></user-investors-index>'
        })
        .state('user.investors.new', {
          url: '/user/investors/new',
          template: '<user-investors-new></user-investors-new>'
        })
        .state('user.investors.edit', {
          url: '/user/investors/:id/edit',
          template: '<user-investors-edit></user-investors-edit>'
        })
        .state('user.hubs', {
          template: '<user-hubs ui-view></user-hubs>'
        })
        .state('user.hubs.index', {
          url: '/user/hubs',
          template: '<user-hubs-index></user-hubs-index>'
        })
        .state('user.hubs.new', {
          url: '/user/hubs/new',
          template: '<user-hubs-new></user-hubs-new>'
        })
        .state('user.hubs.edit', {
          url: '/user/hubs/:id/edit',
          template: '<user-hubs-edit></user-hubs-edit>'
        })
        .state('admin', {
          template: '<admin></admin>'
        })
        .state('adminLogin', {
          url: '/admin/login',
          template: '<div class="container"><admin-login></admin-login></div>'
        })
        .state('admin.dashboard', {
          url: '/admin',
          templateUrl: 'app/modules/admin/dashboard.html'
        })
        .state('admin.claims', {
          template: '<admin-claims ui-view></admin-claims>'
        })
        .state('admin.claims.index', {
          url: '/admin/claims',
          template: '<admin-claims-index></admin-claims-index>'
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
        .state('admin.hubs', {
          template: '<admin-hubs ui-view></admin-hubs>'
        })
        .state('admin.hubs.index', {
          url: '/admin/hubs',
          template: '<admin-hubs-index></admin-hubs-index>'
        })
        .state('admin.hubs.new', {
          url: '/admin/hubs/new',
          template: '<admin-hubs-new></admin-hubs-new>'
        })
        .state('admin.hubs.edit', {
          url: '/admin/hubs/:id/edit',
          template: '<admin-hubs-edit></admin-hubs-edit>'
        })
        .state('search', {
          controller: function(store, $scope, $auth) {
            $scope.logout = function() {
              store.remove('jwt');
              $auth.logout();
            }

            $scope.loggedIn = store.get('jwt') != null
          },
          templateUrl: 'app/search.html'
        })
        .state('search.home', {
          url: '/',
          template: '<home></home>'
        })
        .state('search.searchCompanies', {
          url: '/companies',
          params: {
            tag : {
              value: ''
            },
            // this param is not part of url
            // it can be passed with $state.go or ui-sref
            hiddenParam: 'YES'
          },
          template: '<search-companies></search-companies>'
        })
        .state('search.companyProfile', {
          url: '/company/:id',
          template: '<company-profile></company-profile>'
        })
        .state('search.searchMultinationals', {
          url: '/mtns',
          params: {
            tag : {
              value: ''
            },
            // this param is not part of url
            // it can be passed with $state.go or ui-sref
            hiddenParam: 'YES'
          },
          template: '<search-multinationals></search-multinationals>'
        })
        .state('search.multinationalProfile', {
          url: '/mtns/:id',
          template: '<multinational-profile></multinational-profile>'
        })
        .state('search.searchInvestors', {
          url: '/investors',
          params: {
            tag : {
              value: ''
            },
            // this param is not part of url
            // it can be passed with $state.go or ui-sref
            hiddenParam: 'YES'
          },
          template: '<search-investors></search-investors>'
        })
        .state('search.investorProfile', {
          url: '/investor/:id',
          template: '<investor-profile></investor-profile>'
        })
        .state('search.searchHubs', {
          url: '/hubs',
          params: {
            tag : {
              value: ''
            },
            // this param is not part of url
            // it can be passed with $state.go or ui-sref
            hiddenParam: 'YES'
          },
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
