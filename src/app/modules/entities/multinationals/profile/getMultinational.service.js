(function() {
  'use strict';


  angular
    .module('multinationalProfile')
    .service('getMultinationalService', function($http, $httpParamSerializer, serverUrl) {
      this.find = function(id) {
        var basePath = serverUrl + '/multinationals/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        });
      };
    });
})();
