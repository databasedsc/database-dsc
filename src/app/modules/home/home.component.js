(function () {
  'use strict';

  angular.module('home')
    .component('home', {
      templateUrl: 'app/modules/home/home.html',
      controller: 'HomeController'
    })
    .controller('HomeController', function ($scope, searchCompaniesService, searchInvestorsService, searchHubsService, searchMultinationalsService) {
      var controller = this;
      this.searchCompaniesService = searchCompaniesService;

      $scope.currentPage = 1;
      $scope.perPage = 4;
      this.query = "";

      $scope.$watch('currentPage', function () {
        controller.gatherCompanies();
        controller.gatherInvestors();
        controller.gatherHubs();
        controller.gatherMtns();
      }, true);

      function getPaginationDetails() {
        return {
          currentPage: $scope.currentPage,
          perPage: $scope.perPage
        }
      }

      this.gatherCompanies = function() {
        searchCompaniesService.getCompanies({searchText: this.query}, getPaginationDetails()).then(function(companies) {
          controller.companyResults = companies.data;
          controller.totalCompanyItems = companies.headers('Total')
        });
      };

      this.gatherInvestors = function() {
        searchInvestorsService.get({searchText: this.query}, getPaginationDetails()).then(function(investors) {
          controller.investorResults = investors.data;
          controller.totalInvestorItems = investors.headers('Total');
        });
      };

      this.gatherHubs = function() {
        searchHubsService.get({searchText: controller.query}, getPaginationDetails()).then(function(hubs) {
          controller.hubResults = hubs.data;
          controller.totalHubItems = hubs.headers('Total');
        })
      }

      this.gatherMtns = function() {
        searchMultinationalsService.get({searchText: controller.query}, getPaginationDetails()).then(function(multinationals) {
          controller.mtnsResults = multinationals.data;
          controller.totalMtnsItems = multinationals.headers('Total');
        })
      }

    });
})();
