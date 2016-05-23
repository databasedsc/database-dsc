(function(){
  "use strict";

  angular
    .module('user')
    .service('userUpdateHubService', function(store, serverUrl, $http) {

      this.update = function(hub) {
        var basePath = serverUrl + '/user/hubs/' + hub.id;

        return $http.put(basePath, hub).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
