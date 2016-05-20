(function() {
  'use strict';

  angular
    .module("user")
    .component("userMultinationalsIndex", {
      templateUrl: 'app/modules/user/multinationals/multinationals.index.html',
      controller: 'UserMultinationalsIndexController'
    })
    .controller('UserMultinationalsIndexController', function(store, $state, $confirm, userListMultinationalsService, userClaimEntityService, Notification, exportToCSV) {
      this.userClaimEntityService = userClaimEntityService;
      var controller = this;

      function getMultinationals() {
        userListMultinationalsService.getAll().then(function(multinationals) {
          controller.multinationals = multinationals;
        }, function() {
          logout();
        });
      }

      function logout() {
        store.remove('jwt');
        $state.go('adminLogin');
      }

      this.claimMultinational = function(e, id) {
        var requestedClaim = {
          entity_id: id,
          entity_type: 'multinational'
        }

        $confirm({text: "Are you sure you want request ownership of this company?"}).then(function() {
          controller.userClaimEntityService.create(requestedClaim).then(function() {
            var element = angular.element(e.target)
            element.text('Requested');
            element.attr('disabled', true);
            Notification.success('Claim has been requested sucessfully. The Admin team will review this shortly!');
          });
        })
      };

      getMultinationals();

      this.export = function() {
        exportToCSV.export('multinationals').then(function(data) {
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
            target: '_blank',
            download: 'multinationals.csv'
          })[0].click();
        })
      };

    })
})();
