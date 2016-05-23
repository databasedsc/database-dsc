(function() {
  'use strict';

  angular
    .module('searchMultinationals')
    .component('searchMultinationals', {
      templateUrl: 'app/modules/entities/multinationals/index.html',
      controller: 'SearchMultinationalsController'
    })
    .controller('SearchMultinationalsController', function($scope, $stateParams, $document, searchMultinationalsService, filterMultinationalsService) {
      var controller = this;
      this.searchMultinationalsService = searchMultinationalsService;
      this.filterCompaniesService = filterMultinationalsService;

      if ($stateParams.tag) {
        this.tag = $stateParams.tag;
      }

      if ($stateParams.tag) {
        this.tag = $stateParams.tag;
      }

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
      controller.currentPage = 1;
      controller.perPage = 9;

      $scope.$watch('currentPage', function () {
        controller.search();
      }, true);

      function getPaginationDetails() {
        return {
          currentPage: controller.currentPage,
          perPage: controller.perPage
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

      // search
      this.search = function() {

        var query = {};
        if (this.query != undefined) {
          query.searchText = this.query;
        }
        if (this.tag != undefined) {
          query.tag = this.tag;
        }

        searchMultinationalsService.get(query, getSelectedFilter(), getPaginationDetails()).then(function(multinationals) {
          controller.results = multinationals.data;
          controller.totalItems = multinationals.headers('Total')
        });
      };
    });
})();
