(function() {
  'use strict';

  angular
    .module('socialLinks')
    .component('socialLinks', {
      bindings: {
        socialAccounts: '<'
      },
      templateUrl: 'app/modules/shared/profile/social_links/social-links.html'
    })
})();
