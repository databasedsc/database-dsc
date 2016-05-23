(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreInvestorService', function(store, serverUrl, $http) {

      this.restore = function(id) {
        var basePath = serverUrl + '/admin/investors/' + id + '/restore';
        return $http.put(basePath);
      }
    })

})();
