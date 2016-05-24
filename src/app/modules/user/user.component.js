(function() {
  "use strict";

  angular
    .module('user')
    .component('user', {
      templateUrl: 'app/modules/user/user.html',
      controller: 'UserController'
    })
    .controller('UserController', function(jwtHelper, $state, $auth) {
      this.jwt = $auth.getToken();

      this.logout = function() {
        $auth.logout();
        $state.go('search.home');
      };

      if (!this.jwt || jwtHelper.isTokenExpired(this.jwt)) {
        this.logout()
      }
    })
})();
