(function() {
  'use strict';


  angular
    .module('searchResults')
    .service('companiesSearchService', function($http, serverUrl) {
      this.getCompanies = function() {
        return $http.get(serverUrl + '/companies').then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
