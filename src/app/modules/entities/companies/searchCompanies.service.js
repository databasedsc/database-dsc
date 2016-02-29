(function() {
  'use strict';


  angular
    .module('searchCompanies')
    .service('searchCompaniesService', function($http, $httpParamSerializer, serverUrl) {
      this.getCompanies = function(query, filters) {
        var basePath = serverUrl + '/companies';
        var params = {}

        if (query || filters) {
          if (query.searchText) {
            params["searchText"] = query.searchText
          }
          if (filters) {
            Object.keys(filters).forEach(function(name){
              if (filters[name] !== '') {
                params[name] = filters[name];
              }
            })
          }
        }

        return $http.get(basePath, {params: params}).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
