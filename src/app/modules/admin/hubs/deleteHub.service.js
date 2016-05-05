(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteHubService', function(serverUrl, $http) {

      this.delete = function(id){
        var baseUrl = serverUrl + '/admin/hubs/' +id;

        return $http.delete(baseUrl);
      }
    })
})();
