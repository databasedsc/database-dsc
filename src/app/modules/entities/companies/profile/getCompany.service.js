(function() {
  'use strict';

  angular
    .module('companyProfile')
    .service('getCompanyService', function($http, $httpParamSerializer, serverUrl) {
      this.find = function(id) {
        var basePath = serverUrl + '/companies/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
