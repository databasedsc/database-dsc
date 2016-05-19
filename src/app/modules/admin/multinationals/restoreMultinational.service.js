(function() {
  "use strict";

  angular
    .module('admin')
    .service('restoreMultinationalService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.restore = function(id) {
        var baseUrl = serverUrl + '/admin/multinationals/' + id + '/restore';

        var req = {
          method: 'PUT',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          }
        }

        return $http(req);
      }
    })

})();
