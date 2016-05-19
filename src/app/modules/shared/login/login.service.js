(function(){
  "use strict";

  angular
    .module('login')
    .service('loginService', function($http, $httpParamSerializer, serverUrl){

      this.authenticate = function(credentials) {
        var baseUrl = serverUrl + '/user_token';

        return $http.post(baseUrl, credentials).then(function(responseObject) {
          return responseObject.data;
        });
      };
    })
})();
