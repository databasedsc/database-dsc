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
        $auth.authenticate(provider).then(function(response) {
          store.set('jwt', response.data.token);
          $state.go('user.profile');
        });
      };

      this.userCredentials = {auth: {} };

      this.login = function() {
        loginService.authenticate(this.userCredentials).then(function(response) {
          store.set('jwt', response.jwt);
          $state.go('user.profile');
        }).catch(function () {
          controller.loginFail = true;
        })
      };
    });
})();
