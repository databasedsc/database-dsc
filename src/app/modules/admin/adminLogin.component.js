(function() {
  "use strict";
  angular
    .module('admin')
    .component('adminLogin', {
      templateUrl: 'app/modules/admin/adminLogin.html',
      controller: 'AdminLoginController'
    })
    .controller('AdminLoginController', function(store, $state, loginService) {
      this.loginService = loginService;
      var controller = this;

      this.userCredentials = {auth: {} };

      this.login = function() {
        loginService.authenticate(this.userCredentials, 'admin').then(function(response) {
          store.set('jwt', response.jwt);
          $state.go('admin.dashboard');
        }).catch(function () {
          controller.loginFail = true;
        })
      };
    });
})();
