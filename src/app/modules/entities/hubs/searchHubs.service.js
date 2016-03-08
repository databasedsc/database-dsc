(function() {
  'use strict';

  angular
    .module('searchHubs')
    .service('searchHubsService', function($http, $httpParamSerializer, serverUrl) {
      this.get = function(query, filters, pagination) {

        var baseUrl = serverUrl + '/hubs';
        var params = {};

        if (query) {
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
        if (pagination) {
          params['page'] = pagination.currentPage;
          params['per_page'] = pagination.perPage;
        }

        return $http.get(baseUrl, {params: params}).then(function(responseObject) {
          return responseObject;
        });
      };
    });
})();
