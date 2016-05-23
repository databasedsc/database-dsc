(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteHubService', function(store, serverUrl, $http) {

      this.delete = function(id){
        var basePath = serverUrl + '/admin/hubs/' +id;
        return $http.delete(basePath);
      }
    })
})();
