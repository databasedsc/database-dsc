(function() {
  'use strict';

  angular
    .module('searchHubs')
    .component('searchHubs', {
      templateUrl: 'app/modules/entities/hubs/index.html',
      controller: 'SearchHubsController'
    })
    .controller('SearchHubsController', function($scope, searchHubsService, filterHubsService) {
      var controller = this;
      this.searchHubsService = searchHubsService;
      this.filterHubsService = filterHubsService;

      this.filters = filterHubsService.filtersData();

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

      this.search = function() {
        searchHubsService.get({searchText: controller.query}, getSelectedFilter(), getPaginationDetails()).then(function(hubs) {
          controller.results = hubs.data;
          controller.totalItems = hubs.headers('Total');
        })
      }
    });
})();
