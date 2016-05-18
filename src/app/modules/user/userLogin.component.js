(function() {
  "use strict";
  angular
    .module('user')
    .component('userLogin', {
      templateUrl: 'app/modules/user/userLogin.html',
      controller: 'UserLoginController'
    })
    .controller('UserLoginController', function(store, $state, loginService) {
      this.loginService = loginService;
      var controller = this;

      this.userCredentials = {auth: {} };

      this.login = function() {
        loginService.authenticate(this.userCredentials, 'user').then(function(response) {
          store.set('jwt', response.jwt);
          $state.go('user.profile');
        }).catch(function () {
          controller.loginFail = true;
        })
      };
    });
})();
