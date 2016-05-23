(function() {
  "use strict";

  angular
    .module('user')
    .component('user', {
      templateUrl: 'app/modules/user/user.html',
      controller: 'UserController'
    })
    .controller('UserController', function(store, jwtHelper, $state, $auth) {
      this.jwt = store.get('jwt');

      this.logout = function() {
        $auth.logout();
        store.remove('jwt');
        $state.go('userLogin');
      };

      if (!this.jwt || jwtHelper.isTokenExpired(this.jwt)) {
        this.logout()
      }
    })
})();
