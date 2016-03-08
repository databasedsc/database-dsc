(function() {
  'use strict';

  angular
    .module('searchCompanies')
    .component('searchCompanies', {
      templateUrl: 'app/modules/entities/companies/index.html',
      controller: 'SearchCompaniesController'
    })
    .controller('SearchCompaniesController', function($scope, searchCompaniesService, filterCompaniesService) {
      var controller = this;
      this.searchCompaniesService = searchCompaniesService;
      this.filterCompaniesService = filterCompaniesService;

      // filter
      this.filters = filterCompaniesService.filtersData();

      function getSelectedFilter() {
        var obj = {};
        Object.keys(controller.filters).map(function(filterName) {
          obj[filterName] = controller.filters[filterName].selectedValue;
        })
        return obj;
      }

      // pagination
      $scope.currentPage = 1;
      $scope.perPage = 9;

      $scope.$watch('currentPage', function () {
        controller.search();
      }, true);

      function getPaginationDetails() {
        return {
          currentPage: $scope.currentPage,
          perPage: $scope.perPage
        }
      }

      // search
      this.search = function() {
        searchCompaniesService.getCompanies({searchText: this.query}, getSelectedFilter(), getPaginationDetails()).then(function(companies) {
          controller.results = companies.data;
          controller.totalItems = companies.headers('Total')
        });
      };
    });
})();
