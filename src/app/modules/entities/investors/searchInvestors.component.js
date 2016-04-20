(function() {
  'use strict';

  angular
    .module('searchInvestors')
    .component('searchInvestors', {
      templateUrl: 'app/modules/entities/investors/index.html',
      controller: 'SearchInvestorsController'
    })
    .controller('SearchInvestorsController', function($scope, $document, searchInvestorsService, filterInvestorsService) {
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

      this.resetSearch = function() {
        // reset the text search
        this.query = "";
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
            case "slider":
              filterObj.range.min = filterObj.defaultRange.min;
              filterObj.range.max = filterObj.defaultRange.max;
              filterObj.selectedValue = "";
              break;
            default:
          }
        });
        // re-query for data with cleared search params
        controller.search();
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
