(function() {
  "use strict";

  angular
    .module('user')
    .component('userHubsIndex', {
      controller: 'UserHubsIndexController',
      templateUrl: 'app/modules/user/hubs/hubs.index.html'
    })
    .controller('UserHubsIndexController', function(store, $state, $confirm, userListHubsService, userClaimEntityService, deleteHubService, restoreHubService, Notification, exportToCSV) {
      this.userListHubsService = userListHubsService;
      this.deleteHubService = deleteHubService;
      this.restoreHubService = restoreHubService;
      this.userClaimEntityService = userClaimEntityService;
      var controller = this;

      getHubs();

      function logout() {
        store.remove('jwt');
        $state.go('adminLogin');
      }

      function getHubs() {
        userListHubsService.getAll().then(function(hubs) {
          controller.hubs = hubs;
        }, function() {
          logout();
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

      this.claimHub = function(e, id) {
        var requestedClaim = {
          entity_id: id,
          entity_type: 'hub'
        }

        $confirm({text: "Are you sure you want request ownership of this hub?"}).then(function() {
          controller.userClaimEntityService.create(requestedClaim).then(function() {
            var element = angular.element(e.target)
            element.text('Requested');
            element.attr('disabled', true);
            Notification.success('Claim has been requested sucessfully. The Admin team will review this shortly!');
          });
        })
      };

      this.export = function() {
        exportToCSV.export('hubs').then(function(data) {
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
            target: '_blank',
            download: 'hubs.csv'
          })[0].click();
        })
      };

    });
})();
