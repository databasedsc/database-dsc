(function () {
  "use strict";

  angular
    .module('user', ['configuration', 'angular-jwt', 'angular-storage', 'ui.router', 'ui-notification', 'satellizer'])
    .config(function(serverUrl, $authProvider) {
      $authProvider.linkedin({
        clientId: '77kusgvv1604kj',
        url: serverUrl + '/auth/linkedin',
        authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
        redirectUri: window.location.origin,
        requiredUrlParams: ['state', 'scope'],
        scope: ['r_basicprofile','r_emailaddress'],
        scopeDelimiter: ' ',
        state: 'STATE',
        type: '2.0',
        popupOptions: { width: 527, height: 582 }
      });
    });
})();
