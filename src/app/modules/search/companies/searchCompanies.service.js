(function() {
  'use strict';


  angular
    .module('searchCompanies')
    .service('searchCompaniesService', function($http, $httpParamSerializer, serverUrl) {
      this.getCompanies = function(query) {

        var queryString = '/companies';
        if (query) {
          queryString += '?' + $httpParamSerializer(query);
        }

        return $http.get(serverUrl + queryString).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
