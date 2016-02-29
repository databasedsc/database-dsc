(function() {
  'use strict';


  angular
    .module('searchMultinationals')
    .service('searchMultinationalsService', function($http, $httpParamSerializer, serverUrl) {
      this.get = function(query) {
        var basePath = serverUrl + '/multinationals';
        var params = {}
        //
        if (query) {
          if (query.searchText) {
            params["searchText"] = query.searchText
          }
        //  if (filters) {
        //    Object.keys(filters).forEach(function(name){
        //      if (filters[name] !== '') {
        //        params[name] = filters[name];
        //      }
        //    })
        //  }
        }

        return $http.get(basePath, {params: params}).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
