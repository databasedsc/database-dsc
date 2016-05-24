(function() {
  "use strict";
  angular
    .module('user')
    .component('userForgotPassword', {
      templateUrl: 'app/modules/user/userForgotPassword.html',
      controller: 'UserForgotPasswordController'
    })
    .controller('UserForgotPasswordController', function(store, $state, userForgotPasswordService, $scope) {
      var controller = this;

      this.userForgotPasswordService = userForgotPasswordService;

      this.params = { "password_reset": {} };

      this.requestPasswordReset = function() {
        // reset messages
        controller.passwordResetFail = false;
        controller.passwordResetSuccess = false;
        
        userForgotPasswordService.requestPasswordReset(this.params).then(function(response) {
          controller.passwordResetSuccess = true;
        }).catch(function () {
          controller.passwordResetFail = true;
        })
      };
    });
})();
