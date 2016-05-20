(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminClaimsIndex', {
      controller: 'AdminClaimsIndexController',
      templateUrl: 'app/modules/admin/claims/claims.index.html'
    })
    .controller('AdminClaimsIndexController', function(store, $state, jwtHelper, Notification, adminListClaimsService) {
      this.adminListClaimsService = adminListClaimsService;
      var controller = this;

      getClaims();

      function getClaims() {
        adminListClaimsService.getAll().then(function(claims) {
          controller.claims = claims;
        }, function() {
          logout();
        });
      }
    });
})();
