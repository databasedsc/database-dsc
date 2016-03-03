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

      searchHubsService.get().then(function(hubs) {
        controller.results = hubs;
      });

      function getSelectedFilter() {
        var obj = {};
        Object.keys(controller.filters).map(function(filterName) {
          obj[filterName] = controller.filters[filterName].selectedValue;
        })
        return obj;
      }


      this.search = function() {
        searchHubsService.get({searchText: controller.query}, getSelectedFilter()).then(function(hubs) {
          controller.results = hubs;
        })
      }
    });
})();
