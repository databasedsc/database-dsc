(function() {
  'use strict';

  angular
    .module('searchFilters')
    .component('searchFilters', {
      bindings: {
        filters: '<',
        searchfn: '&'
      },
      templateUrl: 'app/modules/shared/search_filters/filters.html',
      controller: 'SearchFiltersController'
    })
    .controller('SearchFiltersController', function($scope) {
      var controller = this;
      this.search = function() {
        this.searchfn();
      }

      $scope.$on("slideEnded", function() {
        for (var filterKey in controller.filters){
          if (controller.filters.hasOwnProperty(filterKey)) {
            var filter = controller.filters[filterKey];
            if (filter.type == 'slider') {
              filter.selectedValue = filter.range.min + '-' + filter.range.max;
            }
          }
        }
        controller.search()
      });
    });
})();
