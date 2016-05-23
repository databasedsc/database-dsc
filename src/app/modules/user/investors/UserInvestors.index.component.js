(function() {
  "use strict";

  angular
    .module('user')
    .component('userInvestorsIndex', {
      controller: 'UserInvestorsIndexController',
      templateUrl: 'app/modules/user/investors/investors.index.html'
    })
    .controller('UserInvestorsIndexController', function(store, $state, $confirm, userListInvestorsService, userClaimEntityService, deleteInvestorService, restoreInvestorService, Notification, exportToCSV) {
      this.userListInvestorsService = userListInvestorsService;
      this.deleteInvestorService = deleteInvestorService;
      this.restoreInvestorService = restoreInvestorService;
      this.userClaimEntityService = userClaimEntityService;
      var controller = this;

      getInvestors();

      function logout() {
        store.remove('jwt');
        $state.go('userLogin');
      }

      function getInvestors() {
        userListInvestorsService.getAll().then(function(investors) {
          controller.investors = investors;
        }, function() {
          logout();
        });
      }

      this.deleteInvestor = function(id) {
        controller.deleteInvestorService.delete(id).then(function() {
          getInvestors();
          Notification.success('The entry has been deleted.')
        })
      };

      this.restoreInvestor = function(id) {
        controller.restoreInvestorService.restore(id).then(function() {
          getInvestors();
          Notification.success('The entry has been restored!')
        })
      };

      this.claimInvestor = function(e, id) {
        var requestedClaim = {
          entity_id: id,
          entity_type: 'investor'
        }

        $confirm({text: "Are you sure you want request ownership of this investor?"}).then(function() {
          controller.userClaimEntityService.create(requestedClaim).then(function() {
            var element = angular.element(e.target)
            element.text('Requested');
            element.attr('disabled', true);
            Notification.success('Claim has been requested sucessfully. The Admin team will review this shortly!');
          });
        })
      };

      this.export = function() {
        exportToCSV.export('investors').then(function(data) {
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
            target: '_blank',
            download: 'investors.csv'
          })[0].click();
        })
      };

    });
})();
