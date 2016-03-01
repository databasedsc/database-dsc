(function() {
  'use strict';

  angular
    .module('searchHubs')
    .service('searchHubsService', function($http, $httpParamSerializer, serverUrl) {
      this.get = function(query) {

        var baseUrl = serverUrl + '/hubs';
        var params = {};

        if (query) {
          if (query.searchText) {
            params["searchText"] = query.searchText
          }
        }
        return $http.get(baseUrl, {params: params}).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
