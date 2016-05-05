(function() {
  'use strict';


  angular
    .module('searchInvestors')
    .service('searchInvestorsService', function($http, $httpParamSerializer, serverUrl) {
      this.get = function(query, filters, pagination) {
        var basePath = serverUrl + '/investors';
        var params = {}
        //
        if (query) {
          if (query.searchText) {
            params["searchText"] = query.searchText
          }
          else if (query.tag) {
            params["tag"] = query.tag
          }
          if (filters) {
            Object.keys(filters).forEach(function(name){
              if (filters[name] !== '') {
                params[name] = filters[name];
              }
            })
          }
        }

        if (pagination){
          params['page'] = pagination.currentPage;
          params['per_page'] = pagination.perPage;
        }

        return $http.get(basePath, {params: params}).then(function(responseObject) {
          return responseObject;
        });
      };
    });
})();
