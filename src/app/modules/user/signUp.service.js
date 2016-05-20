(function(){
  "use strict";

  angular
    .module('signUp')
    .service('signUpService', function($http, $httpParamSerializer, serverUrl){

      this.signUp = function(params, viaLinkedIn) {
        var baseUrl = serverUrl + '/users';

        if (viaLinkedIn) {
          params = {
            'user': {
              'provider': 'linkedin',
              'uid': params.id,
              'email': params.emailAddress,
              'first_name': params.firstName,
              'last_name': params.lastName
            }
          }
        }

        params.via_linkedin = viaLinkedIn;

        return $http.post(baseUrl, params).then(function(responseObject) {
          return responseObject.data;
        });
      };
    })
})();
