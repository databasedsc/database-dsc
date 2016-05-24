(function() {
  "use strict";
  angular
    .module('user')
    .component('userResetPassword', {
      templateUrl: 'app/modules/user/userResetPassword.html',
      controller: 'UserResetPasswordController'
    })
    .controller('UserResetPasswordController', function(store, $state, userForgotPasswordService, $scope, $location, $document) {
      var controller = this;

      this.userForgotPasswordService = userForgotPasswordService;

      var token = $location.search().token;
      var email = $location.search().email;

      this.params = {
        "user": {},
        "password_reset": {
          "email": email
        }
      };

      this.resetPassword = function() {
        // reset messages
        controller.passwordResetFail = false;
        controller.passwordResetSuccess = false;

        userForgotPasswordService.resetPassword(token, this.params).then(function(response) {
          $document[0].getElementById("inputPassword").value = "";
          controller.passwordResetSuccess = true;
        }).catch(function () {
          controller.passwordResetFail = true;
        })
      };
    });
})();
