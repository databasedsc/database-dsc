(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreMultinationalService', function(serverUrl, $http) {

      this.restore = function(id) {
        var baseUrl = serverUrl + '/admin/multinationals/' + id + '/restore';

        return $http.put(baseUrl);
      }
    })

})();
