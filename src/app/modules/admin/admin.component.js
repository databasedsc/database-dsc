(function() {
  "use strict";

  angular
    .module('admin')
    .component('admin', {
      templateUrl: 'app/modules/admin/admin.html',
      controller: 'AdminController'
    })
    .controller('AdminController', function($auth, jwtHelper, $state) {
      this.jwt = $auth.getToken();

      this.logout = function() {
        $auth.removeToken();
        $state.go('adminLogin');
      };

      if (!this.jwt || jwtHelper.isTokenExpired(this.jwt)) {
        this.logout()
      }
    })
})();
