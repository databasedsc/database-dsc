(function() {
  'use strict';

  angular
    .module('searchHubs')
    .component('searchHubs', {
      templateUrl: 'app/modules/entities/hubs/index.html',
      controller: 'SearchHubsController'
    })
    .controller('SearchHubsController', function($scope, searchHubsService) {
      var controller = this;
      this.searchHubsService =  searchHubsService;

      searchHubsService.get().then(function(hubs){
        controller.results = hubs;
      });

      this.search = function() {
        searchHubsService.get({searchText: controller.query}).then(function(hubs){
          controller.results = hubs;
        })
      }
    });
})();
