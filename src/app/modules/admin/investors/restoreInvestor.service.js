(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreInvestorService', function(serverUrl, $http) {

      this.restore = function(id) {
        var baseUrl = serverUrl + '/admin/investors/' + id + '/restore';

        return $http.put(baseUrl);
      }
    })

})();
