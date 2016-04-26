(function() {
  'use strict';

  angular
    .module('searchHubs')
    .component('searchHubs', {
      templateUrl: 'app/modules/entities/hubs/index.html',
      controller: 'SearchHubsController'
    })
    .controller('SearchHubsController', function($scope, $stateParams, $document, searchHubsService, filterHubsService) {
      var controller = this;
      this.searchHubsService = searchHubsService;
      this.filterHubsService = filterHubsService;

      if ($stateParams.tag) {
        this.tag = $stateParams.tag;
      }

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

      this.resetSearch = function() {
        // reset the text search
        this.query = "";
        // reset 'tag' if exists
        this.tag = null;
        // reset all the filters
        Object.keys(controller.filters).map(function(filterName) {
          var filterObj = controller.filters[filterName];
          filterObj.selectedValue = "";

          switch (filterObj.type) {
            case "dropdown":
              $document[0].getElementById(filterObj.id).selectedIndex = 0;
              break;
            case "checklist":
              filterObj.selectedString = filterObj.noSelectionString;
              var checkboxes = $document[0].getElementsByName("filterCheckbox")
              for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
              }
              break;
            default:
          }
        });
        // re-query for data with cleared search params
        controller.search();
      }

      this.search = function() {

        var query = {};
        if (this.query != undefined) {
          query.searchText = this.query;
        }
        if (this.tag != undefined) {
          query.tag = this.tag;
        }

        searchHubsService.get(query, getSelectedFilter(), getPaginationDetails()).then(function(hubs) {
          controller.results = hubs.data;
          controller.totalItems = hubs.headers('Total');
        })
      }
    });
})();
