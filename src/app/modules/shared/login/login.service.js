(function(){
  "use strict";

  angular
    .module('login')
    .service('loginService', function($http, $httpParamSerializer, serverUrl){

      this.authenticate = function(credentials) {
        var baseUrl = serverUrl + '/knock/auth_token';

        return $http.post(baseUrl, credentials).then(function(responseObject) {
          return responseObject.data;
        });
      };
    })
})();
