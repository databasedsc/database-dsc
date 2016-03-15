(function() {
  "use strict";
  angular
    .module('login')
    .component('login', {
      templateUrl: 'app/modules/login/login.html',
      controller: 'LoginController'
    })
    .controller('LoginController', function(store, $state, loginService) {
      this.loginService = loginService;
      var controller = this;

      this.userCredentials = {auth: {} };

      this.login = function() {
        loginService.authenticate(this.userCredentials).then(function(response) {
          store.set('jwt', response.jwt);
          $state.go('admin.dashboard');
        }).catch(function () {
          controller.loginFail = true;
        })
      };
    });
})();
