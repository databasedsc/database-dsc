(function() {
  'use strict';

  angular
    .module('searchHubs')
    .service('searchHubsService', function($http, $httpParamSerializer, serverUrl) {
      this.get = function(query, filters) {

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
        return $http.get(baseUrl, {params: params}).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
