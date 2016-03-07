(function(){
  "use strict";

  angular
    .module('hubProfile')
    .service('getHubService', function($http, serverUrl) {
      this.find = function(id) {
        var basePath = serverUrl + '/hubs/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        });
      }
    })
})();
