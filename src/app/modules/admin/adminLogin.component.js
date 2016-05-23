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
        loginService.authenticate(this.userCredentials).then(function(response) {
          console.log("Login Token: " + response.jwt);
          store.set('jwt', response.jwt);
          $state.go('admin.dashboard');
        }).catch(function () {
          controller.loginFail = true;
        })
      };
    });
})();
