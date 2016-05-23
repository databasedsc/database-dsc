(function() {
  "use strict";

  angular
    .module('user')
    .component('userProfileEdit', {
      templateUrl: 'app/modules/user/profile/userProfile.edit.html',
      controller: 'UserProfileEditController'
    })
    .controller('UserProfileEditController', function($auth, $state, jwtHelper, userProfileService, updateUserProfileService, $stateParams, Notification) {
      var controller = this;

      var token = $auth.getToken();
      var payload = jwtHelper.decodeToken(token);

      userProfileService.getUserProfile(payload.sub).then(function(user) {
        controller.user = user;
      });

      this.update = function() {
        updateUserProfileService.update(controller.user)
          .then(function(user) {
            controller.user = user;
            Notification.success('User Profile Updated!')
          }, function() {
            Notification.error('Error: User profile could not be saved!')
          })
      }
    })
})();
