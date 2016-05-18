(function() {
  "use strict";
  angular
    .module('user')
    .component('userSignup', {
      templateUrl: 'app/modules/user/userSignup.html',
      controller: 'UserSignUpController'
    })
    .controller('UserSignUpController', function(store, $state, signUpService) {
      this.signUpService = signUpService;
      var controller = this;

      this.userInfo = { user: {} };

      this.signUp = function() {
        signUpService.authenticate(this.userInfo).then(function(response) {
          store.set('jwt', response.jwt);
          $state.go('user.profile');
        }).catch(function () {
          controller.signUpFail = true;
        })
      };
    });
})();
