(function() {
  'use strict';


  angular
    .module('searchInvestors')
    .service('searchInvestorsService', function($http, $httpParamSerializer, serverUrl) {
      this.get = function(query) {
        var basePath = serverUrl + '/investors';
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
