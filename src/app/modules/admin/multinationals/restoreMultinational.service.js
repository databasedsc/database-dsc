(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreMultinationalService', function(store, serverUrl, $http) {

      this.restore = function(id) {
        var basePath = serverUrl + '/admin/multinationals/' + id + '/restore';
        return $http.put(basePath);
      }
    })

})();
