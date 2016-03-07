(function() {
  'use strict';

  angular
    .module('investorProfile')
    .service('getInvestorService', function($http, $httpParamSerializer, serverUrl) {
      this.find = function(id) {
        var basePath = serverUrl + '/investors/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
