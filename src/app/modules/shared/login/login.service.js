(function(){
  "use strict";

  angular
    .module('login', [])
    .service('loginService', function($http, $httpParamSerializer, serverUrl){

      this.authenticate = function(credentials, userType) {
        var baseUrl = serverUrl + '/' + userType + '_token';

        return $http.post(baseUrl, credentials).then(function(responseObject) {
          return responseObject.data;
        });
      };
    })
})();
