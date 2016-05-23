(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminClaimsIndex', {
      controller: 'AdminClaimsIndexController',
      templateUrl: 'app/modules/admin/claims/claims.index.html'
    })
    .controller('AdminClaimsIndexController', function(store, $state, $confirm, jwtHelper, Notification, adminListClaimsService, adminUpdateClaim) {
      this.adminListClaimsService = adminListClaimsService;
      this.adminUpdateClaim = adminUpdateClaim;
      var controller = this;

      getClaims();

      function getClaims() {
        adminListClaimsService.getAll().then(function(claims) {
          controller.claims = claims;
        });
      }

      this.approveClaim = function(e, id) {
        var element = angular.element(e.target)
        element.text('Requested');
        element.attr('disabled', true);

        var claimStatus = {
          claim_id: id,
          status: 'approved'
        }

        $confirm({text: "Are you sure you want to approve this claim?"}).then(function() {
          controller.adminUpdateClaim.update(claimStatus).then(function() {
            Notification.success('Claim has been approved successfully.');
            getClaims();
          });
        })
      };

      this.denyClaim = function(e, id) {
        var element = angular.element(e.target)
        element.text('Requested');
        element.attr('disabled', true);

        var claimStatus = {
          claim_id: id,
          status: 'denied'
        }

        $confirm({text: "Are you sure you want to DENY this claim?"}).then(function() {
          controller.adminUpdateClaim.update(claimStatus).then(function() {
            Notification.success('Claim has been denied successfully.');
            getClaims();
          });
        })
      };
    });
})();
