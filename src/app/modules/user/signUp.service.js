(function(){
  "use strict";

  angular
    .module('signUp')
    .service('signUpService', function($http, $httpParamSerializer, serverUrl){

      this.authenticate = function(credentials) {
        var baseUrl = serverUrl + '/users';

        return $http.post(baseUrl, credentials).then(function(responseObject) {
          return responseObject.data;
        });
      };
    })
})();
