(function() {
  'use strict';

  angular
    .module('searchMultinationals')
    .component('searchMultinationals', {
      templateUrl: 'app/modules/entities/multinationals/index.html',
      controller: 'SearchMultinationalsController'
    })
    .controller('SearchMultinationalsController', function($scope, searchMultinationalsService, filterMultinationalsService) {
      var controller = this;
      this.searchMultinationalsService = searchMultinationalsService;
      this.filterCompaniesService = filterMultinationalsService;

      // filters
      this.filters = filterMultinationalsService.filtersData();

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
          searchMultinationalsService.get({searchText: this.query}, getSelectedFilter(), getPaginationDetails()).then(function(multinationals) {
            controller.results = multinationals.data;
            controller.totalItems = multinationals.headers('Total')
          });
        //});
      };
    });
})();
