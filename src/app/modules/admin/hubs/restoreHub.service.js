(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreHubService', function(store, serverUrl, $http) {

      this.restore = function(id) {
        var basePath = serverUrl + '/admin/hubs/' + id + '/restore';
        return $http.put(basePath);
      }
    })

})();
