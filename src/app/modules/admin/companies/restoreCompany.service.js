(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreCompanyService', function(serverUrl, $http) {

      this.restore = function(id) {
        var baseUrl = serverUrl + '/admin/companies/' + id + '/restore';

        return $http.put(baseUrl);
      }
    })

})();
