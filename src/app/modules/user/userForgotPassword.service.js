(function(){
  "use strict";

  angular
    .module('user')
    .service('userForgotPasswordService', function($http, $httpParamSerializer, serverUrl){

      this.requestPasswordReset = function(params) {
        var baseUrl = serverUrl + '/password_resets';

        return $http.post(baseUrl, params).then(function(responseObject) {
          return responseObject.data;
        });
      };

      this.resetPassword = function(token, params) {
        var baseUrl = serverUrl + '/password_resets/' + token;

        return $http.put(baseUrl, params).then(function(responseObject) {
          return responseObject.data;
        });
      };
    })
})();
