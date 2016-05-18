(function() {
  "use strict";

  angular
    .module('user')
    .component('user', {
      templateUrl: 'app/modules/user/user.html',
      controller: 'UserController'
    })
    .controller('UserController', function(store, jwtHelper, $state) {
      this.jwt = store.get('jwt');

      this.logout = function() {
        store.remove('jwt');
        $state.go('user.login');
      };

      if (!this.jwt || jwtHelper.isTokenExpired(this.jwt)) {
        this.logout()
      }
    })
})();
