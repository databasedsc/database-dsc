(function() {
  'use strict';

  angular
    .module('searchInvestors')
    .component('searchInvestors', {
      templateUrl: 'app/modules/entities/investors/index.html',
      controller: 'SearchInvestorsController'
    })
    .controller('SearchInvestorsController', function($scope, searchInvestorsService, filterInvestorsService) {
      var controller = this;
      this.searchInvestorsService = searchInvestorsService;
      this.filterInvestorsService = filterInvestorsService;

      // filters
      this.filters = filterInvestorsService.filtersData();

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
        searchInvestorsService.get({searchText: this.query}, getSelectedFilter(), getPaginationDetails()).then(function(investors) {
          controller.results = investors.data;
          controller.totalItems = investors.headers('Total');
        });
      };

    });
})();
