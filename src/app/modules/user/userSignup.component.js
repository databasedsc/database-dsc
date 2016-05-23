(function() {
  "use strict";
  angular
    .module('user')
    .component('userSignup', {
      templateUrl: 'app/modules/user/userSignup.html',
      controller: 'UserSignUpController'
    })
    .controller('UserSignUpController', function(store, $state, signUpService, $auth) {
      this.signUpService = signUpService;
      var controller = this;

      this.userInfo = { user: {} };

      this.signUp = function() {
        signUpService.signUp(this.userInfo, false).then(function(response) {
          $auth.setToken(response.jwt);
          $state.go('user.profile');
        }).catch(function () {
          controller.signUpFail = true;
        })
      };
    });
})();
