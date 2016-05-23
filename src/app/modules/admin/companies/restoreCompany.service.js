(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreCompanyService', function(store, serverUrl, $http) {

      this.restore = function(id) {
        var basePath = serverUrl + '/admin/companies/' + id + '/restore';
        return $http.put(basePath);
      }
    })
})();
