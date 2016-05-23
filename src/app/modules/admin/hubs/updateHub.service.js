(function(){
  "use strict";

  angular
    .module('admin')
    .service('updateHubService', function(store, serverUrl, $http) {

      this.update = function(hub) {
        var basePath = serverUrl + '/admin/hubs/' + hub.id;

        return $http.put(basePath, hub).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
