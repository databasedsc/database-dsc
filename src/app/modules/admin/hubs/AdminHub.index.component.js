(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminHubsIndex', {
      controller: 'AdminHubsIndexController',
      templateUrl: 'app/modules/admin/hubs/hubs.index.html'
    })
    .controller('AdminHubsIndexController', function(listHubsService, deleteHubService, restoreHubService, Notification) {
      this.listHubsService = listHubsService;
      this.deleteHubService = deleteHubService;
      this.restoreHubService = restoreHubService;
      var controller = this;

      getHubs();

      function getHubs() {
        listHubsService.getAll().then(function(hubs) {
          controller.hubs = hubs;
        });
      }

      this.deleteHub = function(id) {
        controller.deleteHubService.delete(id).then(function() {
          getHubs();
          Notification.success('The entry has been deleted.')
        })
      };

      this.restoreHub = function(id) {
        controller.restoreHubService.restore(id).then(function() {
          getHubs();
          Notification.success('The entry has been restored!')
        })
      };
    });
})();
