(function() {
  "use strict";
  angular
    .module('user')
    .component('userLogin', {
      templateUrl: 'app/modules/user/userLogin.html',
      controller: 'UserLoginController'
    })
    .controller('UserLoginController', function(store, $state, loginService, signUpService, $scope, $auth) {
      this.loginService = loginService;
      this.signUpService = signUpService;
      var controller = this;

      this.authenticate = function(provider) {
        $auth.authenticate(provider).then(function() {
          $state.go('user.companies.index');
        });
      };

      this.userCredentials = {auth: {} };

      this.login = function() {
        loginService.authenticate(this.userCredentials).then(function(response) {
          $auth.setToken(response.jwt);
          $state.go('user.companies.index');
        }).catch(function () {
          controller.loginFail = true;
        })
      };
    });
})();
