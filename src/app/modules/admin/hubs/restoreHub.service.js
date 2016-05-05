(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreHubService', function(serverUrl, $http) {

      this.restore = function(id) {
        var baseUrl = serverUrl + '/admin/hubs/' + id + '/restore';

        return $http.put(baseUrl);
      }
    })

})();
