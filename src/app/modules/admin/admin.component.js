(function() {
  "use strict";

  angular
    .module('admin')
    .component('admin', {
      templateUrl: 'app/modules/admin/admin.html',
      controller: 'AdminController'
    })
    .controller('AdminController', function(store, jwtHelper, $state) {
      this.jwt = store.get('jwt');

      this.logout = function() {
        store.remove('jwt');
        $state.go('adminLogin');
      };

      if (!this.jwt || jwtHelper.isTokenExpired(this.jwt)) {
        this.logout()
      }
    })
})();
